const express = require("express") /* Imports express (the server module) */
var app = express() /* Makes a new server */

/** app.get is run when a path is loaded on a browser */
app.get('/', async (req, res) => {
    res.redirect('/web/index.html') /* redirects to the index page if there's no additional path */
})

app.get('/web/:name', async (req, res) => {
    res.sendFile(__dirname + '/main/' + req.params.name) /* example.com/web/file will load main/file */
})



app.get('/accept', async (req, res) => {

})

app.listen(80, () => {}) /* Boots the server */