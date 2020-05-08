const { dbheroku, dblocal } = require( './.env' )

module.exports = {
    client: 'postgresql',
    connection: dblocal,
    // connection: 'postgres://jkwarzjwcnsjmu:32e033ab173a38cb7c0cc61ab6d6f6ade7cd22c32034603ceb46f91818140cb3@ec2-34-234-228-127.compute-1.amazonaws.com:5432/dc0a08uagqcrkb',
    // connection: dbheroku,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
};
