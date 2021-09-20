
class Animal {
    constructor(cor, tamanho, peso) {
        this.cor = cor
        this.tamanho = tamanho
        this.peso = peso
    }
    domir() {
        console.log("domir")
    }
}

class Passaro extends Animal {
    constructor(bico, cor, tamanho, peso) {
        super(cor.tamanho, peso)
        this.bico = null
    }
    voar() {
        console.log("Voar")
    }
}
class Papagaio extends Passaro {
    constructor(sabeFalar, cor, tamanho, peso) {
        super('Medio', cor, tamanho, peso)
        this.sabeFalar = sabeFalar
    }
    falar() {
        console.log("falar")
    }
}
class Avestruz extends Passaro {
    constructor() {
        super("Grande", "branco e preto", 250, 15000)
    }
    enterrarCabeca() {
        console.log("enterrar a Cabeça")
    }
    voar() {
        console.log('nao sabe voar')
    }
}
let papagaio = new Papagaio(true, "verde", 25, 350)
console.log(papagaio)

papagaio.voar()

let avestruz = new Avestruz()
avestruz.enterrarCabeca()
avestruz.voar()
