
exports.up = function(knex, Promise) {
  return knex.schema.createTable('authors', function (table) {
    table.increments()
    table.text('first_name')
    table.text('last_name')
    table.text('bio')
    table.text('portrait_url')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('authors')  
};