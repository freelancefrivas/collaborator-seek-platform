const {Pool} = require('pg');
const pool = new Pool({
    host: 'db',
    port: 5432,
    database: 'side_project',
    user: 'side_user',
    password: 'sideproject',
    max: 10,                    // máximo 10 conexiones
    idleTimeoutMillis: 30000,   // cierra conexiones inactivas después de 30s
    connectionTimeoutMillis: 2000, // timeout para conectar
    query_timeout: 5000,        // timeout para queries
})

module.exports = pool