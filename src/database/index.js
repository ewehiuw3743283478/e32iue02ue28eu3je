"use strict";
const Database = require("better-sqlite3");
const pgAdapter = require("./pg_adapter");

module.exports = (conf = {}) => {
    let DB;
    if (process.env.DATABASE_URL) {
        DB = pgAdapter(process.env.DATABASE_URL);
    } else {
        // Extract configuration path or use default
        const { path = __dirname + '/db.db' } = conf;
        // Initialize the SQLite database
        DB = new Database(path);
    }

    // Import and initialize database tables and related functionality
    const { servers } = require("./servers")(DB);
    const { traffic, lt } = require("./traffic")(DB);
    const { load_m, load_h } = require("./load")(DB);
    const { ssh_scripts } = require("./ssh_scripts")(DB);
    const { setting } = require("./setting")(DB);

    // Define a function to get all servers
    function getServers() {
        return servers.all();
    }

    // Return an object with all functionalities and the database instance
    return {
        DB,
        servers,
        getServers,
        traffic,
        lt,
        load_m,
        load_h,
        ssh_scripts,
        setting,
    };
};
