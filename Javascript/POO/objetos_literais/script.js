class Produto{
    constructor(descricao,preco){
        this.descricao = descricao
        this.preco = preco
    }
    verDescricao(){
        console.log(`${this.descricao}por apenas ${this.preco}`)
    }
   
}
let produto = new Produto('Notbook',2200)
produto.verDescricao()

let produtoLiteral= {
    descricao: "geladeira",
    preço: 1800,
    verDescricao: function(){
        console.log(`${this.descricao}por apenas ${this.preco}`)
        
    }
}
produto.verDescricao()

////////////////////////////////////////////////////////////

let nome ="jorge"
let idade = 29
let sexo = "masculino"
let profissao = " Programador"

let objeto = {
    nome: nome ,
    idade: idade,
    sexo:  sexo,
    profissao: profissao,
    exibirResumo: function() {
       console.log(`${this.nome}, ${this.idade} anos, ${this.sexo}, e sua ${this.profissao}`) 
    }
   

   
}
console.log(objeto)
objeto.exibirResumo()
let objeto2 = {
    nome,
    idade,
    sexo,
    profissao,
    exibirResumo() {
       console.log(`${this.nome}, ${this.idade} anos, ${this.sexo}, e sua ${this.profissao}`) 
    }
    
   

   
}
objeto2.exibirResumo()

/////////////////////////////////
//modificando valor


let pessoa ={
    nome: 'jose',
    idade: 45
    
    }

    console.log(pessoa)

    pessoa.nome="Fernanda"
    pessoa.idade = 32
    console.log(pessoa)
    
