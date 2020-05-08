const { dbheroku, dblocal, dbelephant } = require( './.env' )

module.exports = {
    client: 'postgresql',
    // connection: dblocal,

    // postgres da IBMCloud(ElephantSQL)
    connection: dbelephant,

    // postgres Heroku
    // connection: dbheroku,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
};
