// length 
// legth tras a quantidade de caracter 
var nome = "Matheus"
nome.length

//indexOf
//indexOf tras o indice do caracter
nome[2]

var frase = 'o rato roeu a ropa do rei de roma'

frase.indexOf("roeu")

//slice
// tras uma palavra da frease

var roeu = frase.slice(7, 11)

//replace
// substitui a palavra da frase
var novaFrase = frase.replace("roeu","teste")


//toLowerCase e ToUppercase
// Usados para deixar o texto em caixa baixa ou alta

var frase = "Esta é a frase que vamos manipular";


console.log(frase.toLowerCase)
console.log(frase.toUpperCase)


//trim para ignorar os espaços

var nome ="    Matheus    "

nome.trim()


//sprit

frase.sprit("")

var tags = "PHP ,JAVASCRIPT , HTML";

tags.split("")

// lastIndexOf

var fraseDois=" eu quero a ultima palavra de teste"

fraseDois.lastIndexOf("teste")

