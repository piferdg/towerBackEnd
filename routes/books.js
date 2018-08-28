const express = require('express');
const router = express.Router();

const queries = require('../queries')

router.get("/books", (request, response, next) => {
    queries.listBooks('books').then(books => {
        response.json({books});
    }).catch(next);
})

router.get("/books/:id", (request, response, next) => {
    queries.read('books', request.params.id).then(book => {
        book
            ? response.json({book})
            : response.status(404).json({message: 'Book not found'})
    }).catch(next);
});

router.post("/books", (request, response, next) => {
    queries.post('books', request.body).then(newPost => {
        response.status(201).json({newPost});
    }).catch(next);
});

router.delete("/books/:id", (request, response, next) => {
    queries.delete('books', request.params.id).then(() => {
        response.status(204).json({deleted: true});
    }).catch(next);
});

router.put("/books/:id", (request, response, next) => {
    queries.update('books', request.params.id, request.body).then(newUpdate => {
        response.json({newUpdate});
    }).catch(next);
});

module.exports = router;