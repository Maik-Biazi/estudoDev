function exibir(num){
    console.log("a operaçao resultou em:"+ num)
}


function soma(a,b,callback){
    var op = a + b
    console.log(op)
    callback(op)
}

function multiplicacao(a,b,cb){
    var op = a *b;
    cb(op)
}

soma(2,2,exibir)

multiplicacao(2,4,exibir)