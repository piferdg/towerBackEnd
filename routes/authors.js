const express = require('express');
const router = express.Router();

const queries = require('../queries');

router.get("/authors", (request, response, next) => {
    queries.list().then(authors => {
        response.json({authors});
    }).catch(next);
});

router.get("/authors:id", (request, response, next) => {
    queries.read(request.params.id).then(author => {
        player
            ? response.json({author})
            : response.status(404).json({message: 'Author not found'})
    }).catch(next);
});

router.post("/author", (request, response, next) => {
    queries.create(request.body).then(author => {
        response.status(201).json({author});
    }).catch(next);
});

router.delete("/authors:id", (request, response, next) => {
    queries.delete(request.params.id).then(() => {
        response.status(204).json({deleted: true});
    }).catch(next);
});

router.put("/authors:id", (request, response, next) => {
    queries.update(request.params.id, request.body).then(author => {
        response.json({author});
    }).catch(next);
});

module.exports = router;