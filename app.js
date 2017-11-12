var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('made a new commit and deploy via pm2')
})

app.listen(5000)
