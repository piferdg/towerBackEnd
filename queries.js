const database = require("./database-connection")

module.exports = {
  listBooks(){
    return database('books')
      .select('books.cover_url', 'books.title', 'authors.first_name', 'authors.last_name', 'books.genre', 'books.description')
      .from('books')
      .innerJoin('books_authors', 'books.id', 'books_authors.books_info')
      .innerJoin('authors', 'authors.id', 'books_authors.authors_info')
  },
  listAuthors(){
    return database('authors')
      .select('authors.portrait_url', 'authors.first_name', 'authors.last_name', 'authors.bio', 'books.title')
      .from('authors')
      .innerJoin('books_authors', 'authors.id', 'books_authors.authors_info')
      .innerJoin('books', 'books.id', 'books_authors.books_info')
  },
    list(tableName) {
        return database(tableName).select()
    },
    read(tableName, id) {
      return database(tableName).select().where('id', id).first()
    },
    post(tableName, newPost) {
      return database(tableName)
        .insert(newPost)
        .returning('*')
        .then(record => record[0])
    },
    update(tableName, id, newUpdate) {
      return database(tableName)
        .update(newUpdate)
        .where('id', id)
        .returning('*')
        .then(record => record[0])
    },
    delete(tableName, id) {
      return database(tableName)
        .delete()
        .where('id', id)
    }
}