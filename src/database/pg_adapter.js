"use strict";
const { Pool } = require('pg');

module.exports = (connectionString) => {
    const pool = new Pool({
        connectionString,
        ssl: {
            rejectUnauthorized: false
        }
    });

    // Mock the better-sqlite3 API
    const db = {
        prepare: (sql) => {
            return {
                get: async (...params) => {
                    const { rows } = await pool.query(sql, params);
                    return rows[0];
                },
                all: async (...params) => {
                    const { rows } = await pool.query(sql, params);
                    return rows;
                },
                run: async (...params) => {
                    await pool.query(sql, params);
                }
            };
        },
        exec: async (sql) => {
            await pool.query(sql);
        }
    };

    return db;
};
