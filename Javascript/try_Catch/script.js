
throw new Error('houve um erro mas nao se preocupe estamos resolvendo isso')
var video = Array()
video[1] = Array()
video[1]['nome'] = 'fullmetal alchemist'
video[1]['categoria'] = ' anime'

function getVideo(video){
    try{
        console.log(video[0]['nome'])
    
    }catch(erro){
        console.log("agora sim podemos tratar esse erro")
    }
    finally{
        console.log("sempre passa por aqui")
    }
    console.log('a aplicaçao nao morreu')
}
function tratarErro(e){
    //logica para registrar o erro no servidor
}
getVideo(video)
