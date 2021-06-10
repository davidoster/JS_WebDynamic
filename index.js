const express = require('express')
const app = express() // start the server
const port = 3001
const course = "CB13 JavaScript"
const myHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>Hello World</p>
    <form action="http://localhost:3001/login" method="POST">
        Username: <input type="text" name="username"><br>
        Password: <input type="password" name="password">
        <input type="submit"  value="Login">
    </form>
</body>
</html>`


app.get(['/','/index.html'], (req, res) => { // req = request, res = response
    console.log(req.hostname, req.port, req.ip, req.method, req.originalUrl, req.path, req.url)
    res.send("Hello")
})

app.get('/mytest', (req, res) => { // HTTP GET
  res.send('Hello JS World!')
})

app.get('/tags/psifiako-pistopoiitiko/', (req,res) => {
    res.send('This is the info about digital certificate: <a href="https://www.in.gr/tags/psifiako-pistopoiitiko/">Digital Certificate</a>')
})

app.get('/test2.html', (req,res) => {
    // res.redirect('https://in.gr') // redirect to external url
    res.redirect(`http://localhost:${port}/tags/psifiako-pistopoiitiko/`) // redirect to internal url
})

// show the login page
app.get('/login', (req, res) => { 
    res.send(myHTML)
})   

// show the result from the login process
app.post('/login', (req, res) => { 
    console.log(req.hostname, req.port, req.ip, req.method, req.originalUrl, req.path, req.url)
    // if(req.params) // username == 'admin' && password == 'admin'
    res.send('Came from login')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})