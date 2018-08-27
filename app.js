const express = require('express')
const cors = require("cors")
const bodyParser = require('body-parser')
const port = parseInt(process.env.PORT || 3000)

const app = express()
// const queries = require('./queries')

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res, next) => {
  res.json({
    message: 'Hello World!'
  });
})






app.listen(port, () => { console.log(`Listening on port ${port}`) })