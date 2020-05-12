
exports.up = function(knex, Promise) {
    return knex.schema.alterTable('articles', function(t) {
        t.binary('content').alter(); 
   });
};

exports.down = function(knex, Promise) {
  
};
