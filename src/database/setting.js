
"use strict"
module.exports=(DB)=>{
// DB.prepare("DROP TABLE setting").run();
DB.prepare("CREATE TABLE IF NOT EXISTS setting (key,val,PRIMARY KEY(key))").run();
function S(val){return JSON.stringify(val);}
function P(pair){
    return pair?JSON.parse(pair.val):null;
}
const setting={
    ins(key,val){this._ins.run(key,S(val))},_ins:DB.prepare("INSERT INTO setting (key,val) VALUES (?,?)"),
    set(key,val){this._set.run(key,S(val));},_set:DB.prepare("REPLACE INTO setting (key,val) VALUES (?,?)"),
    get(key){return P(this._get.get(key));},_get:DB.prepare("SELECT * FROM setting WHERE key=?"),
    del(key){DB.prepare("DELETE FROM setting WHERE key=?").run(key);},
    all(){
        var s={};
        for(var {key,val} of this._all.all())s[key]=JSON.parse(val);
        return s;
    },_all:DB.prepare("SELECT * FROM setting"),
};
function init(key,val){if(setting.get(key)==undefined)setting.ins(key,val);}
init("listen",5555);
if (process.env.PASSWORD) {
    setting.set("password", process.env.PASSWORD);
} else {
    init("password", "servermonitor");
}
init("site",{
    name:"ServerMonitor",
    url:"https://your-server-monitor-url.com",
});
init("monitor_tool_url","https://github.com/yourusername/servermonitor/releases/download/v0.1/server-monitor-tool");
init("debug",0);
return {setting};
}
