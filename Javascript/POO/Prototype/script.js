//aviao
//atributos cor e modelo; metodo levantarVoo

//objtos literall

let a1={
    cor:'Branco',
    modelo: 'Airbus a380',
    levantarVoo: function(){
        console.log('levantar voo')
    }

    //funcao construtora

   
}
let AviaoF = function(){
        this.cor ='Azul'
        this.modelo = 'Boeing 787',
        this.levantarVoo = function(){
            console.log('levantar voo')
        }
}
let a2 = new AviaoF();

// CLASSE
class AviaoC{
    constructor(){
        this.cor = 'Vermelho',
        this.modelo = 'Embraer E-jets'
    }
    levantarVoo(){

    }
}
let a3 = new AviaoC()
console.log(a1)
console.log(a2)
console.log(a3)
