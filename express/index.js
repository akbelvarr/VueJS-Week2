const express = require('express')
const app = express()
const port = 3000

var cors = require('cors')
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(cors())
app.use(jsonParser)
app.use(urlencodedParser);

app.get('/', (req, res) => {
  res.json('Hello World!')
})

app.post('/login', (req, res) => {
// simulasi data dari database
const username = 'fakhri'
const password = '123'

// return semua kondisi failed dulu
if (req.body.username !== username) {
    res.json({status: 'error, username not found'})
}

if (req.body.password !== password) {
    res.json({status: 'error, wrong password'})
}
// return kondisi sukses
res.json({status: 'success'})
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})