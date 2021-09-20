let Bicicleta1 ={
    cor: 'Branca ',
    marcha: 'unica',
    aro:12 ,
    pedalar(){
        console.log(" metodo pedalar executado")
    }
}
let Bicicleta2 ={
    cor: 'vermelha ',
    marcha: '18',
    aro: 26,
    pedalar(){
        console.log(" metodo pedalar executado")
    }
}
console.log(Bicicleta1)
console.log(Bicicleta2)


//---------------------------
let BicicletaFactory = function(cor, marcha, aro) {
    return{
        cor: cor,
        marcha: marcha,
        aro: aro,
        pedalar(){
            console.log(" metodo pedalar executado")
        }
    }
    
}
let Bicicleta3 = BicicletaFactory('vermelha', '18', 26)
let Bicicleta4 = BicicletaFactory('azul', '18', 26)
    console.log(Bicicleta3)
    console.log(Bicicleta4)
   