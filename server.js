var fs = require('fs')
var express = require('express')
var path = require('path')
var app = express()
var url = require('url')
const file1 = fs.readFileSync('./frontend/index.html','utf-8')
app.use("/static", express.static(path.resolve(__dirname, "forntend" ,'static')))
app.get("/", function (req, res) {
    // res.header({'content-type':'text/html'})
    res.send(file1)
    console.log(req.url)
    console.log(path.join(__dirname))
})

app.listen(8080,()=>{
    console.log("server is running")
    console.log(path.join(__dirname))
})