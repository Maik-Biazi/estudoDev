var app = require('./config/server')

var rotaNoticia = require('./app/routes/noticias')
rotaNoticia(app)

var rotaHome = require('./app/routes/home')
rotaHome(app)

var rotaFormInclusaoNoticia =require('./app/routes/formulario_inclusao_noticia')




app.listen(3000, function(){
    console.log("Servidor on")
    
})