
exports.up = function(knex, Promise) {
  return knex.schema.createTable('books_authors', function (table) {
   table.integer('books_info').references('books.id').onDelete('cascade')
   table.integer('authors_info').references('authors.id').onDelete('cascade')
   table.primary(['books_info', 'authors_info'])
  }) 
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('books_authors')  
};
