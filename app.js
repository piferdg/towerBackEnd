const express = require('express')
const cors = require("cors")
const bodyParser = require('body-parser')
const port = parseInt(process.env.PORT || 3000)
const books = require("./routes/books")
const authors = require("./routes/authors")
// const queries = require('./queries');

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use(books)
app.use(authors)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error("Not Found. Be sure to append path!");
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get("env") === "development" ? err.stack : {}
  });
});




app.listen(port, () => { console.log(`Listening on port ${port}`) })