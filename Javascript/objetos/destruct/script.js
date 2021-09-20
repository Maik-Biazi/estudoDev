//destructuring com arrays

let arr =[1,2,3,4,5]
let[num1,num2,num3,num4,num5] =arr

console.log(num1)
console.log(num2)
console.log(num3)
console.log(num4)
console.log(num5)


//com objetos
const pessoa = {
    nome: "Matheus",
    profissao: "Programador",
    idade: 29
}

let{nome: nomeVar, profissao: profissaoVar, idade: idadeVar}= pessoa
console.log(nomeVar)
console.log(profissaoVar)
console.log(idadeVar)

//com funçoes
function teste(){
    return['teste',45]
}
let [varA,varB] = teste()
console.log(varA)
console.log(varB)


//IGNORANDO ELEMENTOS

let arrDois =[5,10,15]
const [,dez,quinze] =arrDois

console.log(dez)
console.log(quinze)




