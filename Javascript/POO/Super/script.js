
class Animal {
    constructor(cor,tamanho,peso) {
        this.cor = cor
        this.tamanho = tamanho
        this.peso = peso
    }
    domir() {
        console.log("domir")
    }
}



class Passaro extends Animal {
    constructor(bico,cor, tamanho, peso) {
        super(cor.tamanho,peso)
        this.bico = null
    }
    voar() {
        consol.log("Voar")
    }

}
class Papagaio extends Passaro {
    constructor(sabeFalar ,cor,tamanho,peso) {
        super('Medio',cor,tamanho,peso)
        this.sabeFalar = sabeFalar
    }
    falar(){
        console.log("falar")
    }
}
    let papagaio = new Papagaio(true,"verde",25,350)
    console.log(papagaio)
