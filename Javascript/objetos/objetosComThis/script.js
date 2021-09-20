

let pessoa = {
    nome: "Matheus",
    idada: 29,
    falar: function () {  //aqui é um metodo
        console.log("ola , tudo bem");
    },
    dizerNome: function () { 
        console.log("O meu nome é" + this.nome)
    }

}
pessoa.dizerNome();
