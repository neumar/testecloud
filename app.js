
var express = require('express')

var app = express()

app.set('port', process.env.PORT)


app.get('/hello', function(req, res){
    res.end('WS esta funcionando!')
})

app.get('/dobro/:n', function(req, res){
    d = req.params.n * 2
    res.end('resposta: '+d)
})

app.listen(app.get('port'), function(){
    console.log('app running on port ', app.get('port'))
})