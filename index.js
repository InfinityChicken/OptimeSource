const express = require("express") /* Imports express (the server module) */
var app = express() /* Makes a new server */
var cookieParser = require('cookie-parser')
app.use(cookieParser())
DBUtility = require('./server/DBUtility.js')

/** app.get is run when a path is loaded on a browser */
app.get('/', async (req, res) => { // domain.com -> domain.com/web/index.html
    res.redirect('/web/index.html')
})

app.get('/web/:name', async (req, res) => {
    res.sendFile(__dirname + '/main/' + req.params.name) /* example.com/web/file will load main/file */
})

app.get('/loginwith', async (req, res) => {
    /* Login Requests */
    userparam = req.query['username']
    passparam = req.query['password']
    console.log(userparam)
    user = await DBUtility.userObject(userparam)
    if (!user) return res.redirect('/web/login.html?failed=true')
    if (user && user.password !== passparam) return res.redirect('/web/login.html?failed=true')
    console.log(user)
    res.cookie('tag', user.tag)
    res.cookie('id', user.id) /* The code to log the user in. Rn it doesn't use the database */
    res.cookie('email', user.email)
    res.redirect(`/web/index.html?settag=${user.tag}&setid=${user.id}&setemail=${user.email}`) /* Redirects the user to the home page */
})

app.get('/scheduleapi', async (req, res) => {
    console.log(req.query)
    /* req.query is a JSON array of all of the parameters; name (eventname); start (ex: 05:29); finish; info; month (ex: 05); year (ex: 2023); day; email*/
})

app.get('/accept', async (req, res) => {
    /* Happens when someone accepts an invite */
    id = req.query['id']
})

app.listen(80, () => { console.log('server booted') }) /* Boots the server */