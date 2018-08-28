const express = require('express');
const router = express.Router();

const queries = require('../queries')

router.get("/booksinfo", (request, response, next) => {
    queries.listBooks('books').then(books => {
        response.json({books});
    }).catch(next);
})

module.exports = router;