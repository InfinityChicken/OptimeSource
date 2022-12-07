const express = require("express")
var app = express()

app.get('/', async (req, res) => {
    res.redirect('/web/index.html')
})

app.get('/web/:name', async (req, res) => {
    res.sendFile(__dirname + '/main/' + req.params.name)
})

app.listen(80, () => {})