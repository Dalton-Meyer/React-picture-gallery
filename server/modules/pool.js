const pg = require('pg');
const Pool = pg.Pool;
const config = {
    database: 'react-gallery', // the name of the database
    host: '127.0.0.1', // where is your database
    port: 5432, // the port number for your database, 5432 is the default
    user: "dalton", // mac users may not need this!
    password: "dalton", // mac users may not need this!
    max: 10, // how many connections at one time
    idleTimeoutMillis: 30000 // 30 seconds to try to connect
};

// one instance to rule them all!
const pool = new Pool(config);

pool.on('connect', (client) => {
    console.log('pg connected');
})

pool.on('error', (err, client) => {
    console.log('Unexpected error on idle pg client', err);
    process.exit(-1);
});

module.exports = pool;