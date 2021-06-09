const express = require('express')
const app = express() // start the server
const port = 3000

app.get('/', (req, res) => { // req = request, res = response
    res.send("Hi from HTTP / GET")
})

app.get('/mytest', (req, res) => { // HTTP GET
  res.send('Hello JS World!')
})

app.get('/tags/psifiako-pistopoiitiko/', (req,res) => {
    res.send('This is the info about digital certificate: <a href="https://www.in.gr/tags/psifiako-pistopoiitiko/">Digital Certificate</a>')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})