let pessoa = {
    nome: "Matheus",
    idada: 29,
    falar: function () {  //aqui é um metodo
        console.log("ola , tudo bem");
    },
    soma: function (a,b) {
        return a + b
    }
}

console.log(pessoa.nome)

pessoa.falar()

console.log(pessoa.soma(14, 54))