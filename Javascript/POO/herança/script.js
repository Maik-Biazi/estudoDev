
class Animal {
    constructor() {
        this.cor = ""
        this.tamanho = null
    }
    domir() {
        console.log("domir")
    }
}

class Cachorro extends Animal {
    constructor() {
        super()
        this.orelhas = "grandes e caidas"
    }
    correr() {
        console.log("Correr")
    }

    rosnar() {
        console.log("Rosnar")
    }
}

class Passaro extends Animal {
    constructor() {
        super()
        this.bico = 'curto'
    }
    voar() {
        consol.log("Voar")
    }

}
class Papagaio extends Passaro {
    constructor() {
        super()
        this.sabeFalar = true
    }
    falar(){
        console.log("falar")
    }
}
let cachorro = new Cachorro()
let passaro = new Passaro()
let papagaio = new Papagaio()

cachorro.domir()
passaro.domir()
papagaio.falar()
papagaio.domir()
papagaio.voar()
