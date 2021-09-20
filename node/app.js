var express = require('express')
var app = express()
app.get('/',function(req, res){
    res.send("<html><body>Portal de noticia</body></html>")
})
app.get('/tecnologia',function(req, res){
    res.send("<html><body>noticia de Tecnologia</body></html>")
})

app.listen(3000, function(){
    console.log('servidor rodando com express')
})