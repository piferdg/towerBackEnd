const express = require('express');
const router = express.Router();

const queries = require('../queries');

router.get("/authors", (request, response, next) => {
    queries.list('authors').then(authors => {
        response.json({authors});
    }).catch(next);
});

router.get("/authors/:id", (request, response, next) => {
    queries.read('authors', request.params.id).then(authors => {
        authors
            ? response.json({authors})
            : response.status(404).json({message: 'Author not found'})
    }).catch(next);
});

router.post("/author", (request, response, next) => {
    queries.post('authors', request.body).then(newPost => {
        response.status(201).json({newPost});
    }).catch(next);
});

router.delete("/authors/:id", (request, response, next) => {
    queries.delete('authors', request.params.id).then(() => {
        response.status(204).json({deleted: true});
    }).catch(next);
});

router.put("/authors/:id", (request, response, next) => {
    queries.update('authors', request.params.id, request.body).then(newUpdate => {
        response.json({newUpdate});
    }).catch(next);
});

module.exports = router;