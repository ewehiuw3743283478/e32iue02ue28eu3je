const ssh=require("../../ssh");
async function initServer(server,monitor_tool_url){
    var sh=
`wget --version||yum install wget -y||apt-get install wget -y
/usr/bin/server-monitor -v||(wget ${monitor_tool_url} -O /usr/bin/server-monitor && chmod +x /usr/bin/server-monitor)
systemctl stop servermonitor
mkdir /etc/server-monitor/
echo "key: ${server.data.api.key}
port: ${server.data.api.port}
debug: false" > /etc/server-monitor/config.yaml
systemctl stop servermonitor
echo "[Unit]
Description=servermonitor

[Service]
Restart=always
RestartSec=5
ExecStart=/usr/bin/server-monitor -c /etc/server-monitor/config.yaml

[Install]
WantedBy=multi-user.target" > /etc/systemd/system/servermonitor.service
systemctl daemon-reload
systemctl start servermonitor
systemctl enable servermonitor`
    var res=await ssh.Exec(server.data.ssh,sh);
    if(res.success)return {status:1,data:"安装成功"};
    else return {status:0,data:"安装失败/SSH连接失败"};
}
async function updateServer(server,monitor_tool_url){
    var sh=
`rm -f /usr/bin/server-monitor
wget ${monitor_tool_url} -O /usr/bin/server-monitor
chmod +x /usr/bin/server-monitor`
    await ssh.Exec(server.data.ssh,sh);
    return {status:1,data:"更新成功"};
}
module.exports={
    initServer,updateServer,
}
