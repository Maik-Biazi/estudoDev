let tituloArtigo = ' como utilizar o operador rest/spread'

console.log(tituloArtigo)
console.log(...tituloArtigo)
console.log([...tituloArtigo])

//arrays
let listaCurs1 = ['NodeJs e MongoDb','ES6, tYPESCRIPT E Angular' ]
let listaCurso2 =['Multiplataforma Android/ios', 'introduçao A linux']
let listaCursoCompleto = ['Web Completo ', 'android completo',...listaCurs1,...listaCurso2]

console.log(listaCursoCompleto)

//objetos

let pessoa ={nome: 'Joao', idade:27}
let clone ={endereco: 'rua abc',...pessoa}
console.log(clone)


//parte 2

function soma(...param){
    let resultado = 0
    console.log(param)
    
    param.forEach(v => resultado += v)
    return resultado
}
console.log(soma(3,8,5,7))

function multiplicacao(m,...p){
    console.log(m)
    let resultado = 0
    console.log(p)
    p.forEach(v => resultado += m * v)
    return resultado
   
}
console.log(multiplicacao(5,7,12,3,49))

