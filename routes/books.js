const express = require('express');
const router = express.Router();

const queries = require('../queries');

router.get("/books", (request, response, next) => {
    queries.list().then(books => {
        response.json({books});
    }).catch(next);
});

router.get("/books:id", (request, response, next) => {
    queries.read(request.params.id).then(book => {
        player
            ? response.json({book})
            : response.status(404).json({message: 'Book not found'})
    }).catch(next);
});

router.post("/books", (request, response, next) => {
    queries.create(request.body).then(book => {
        response.status(201).json({book});
    }).catch(next);
});

router.delete("/books:id", (request, response, next) => {
    queries.delete(request.params.id).then(() => {
        response.status(204).json({deleted: true});
    }).catch(next);
});

router.put("/books:id", (request, response, next) => {
    queries.update(request.params.id, request.body).then(book => {
        response.json({book});
    }).catch(next);
});

module.exports = router;