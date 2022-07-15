// https://github.com/nbvtim/site
// https://nbvtim.github.io/site/

let c = console.log

//let url = "https://translate.google.ru/?hl=ru&tab=rT&sl=en&tl=ru&text=live&op=translate"

var express = require('express')
var app = express()


app.get('/', function (req, res) {
    res.send(res)
})


app.listen(3000, function () {c('____________________________')}) 