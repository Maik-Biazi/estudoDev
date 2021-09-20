class ContaBancaria{
    //agencia
    //numeroConta
    //saldoConta
    //limite
    constructor(){
        this.agencia = 1075
        this.numeroConta = 844837
        this.saldo= 50
        this.limite =450
    }
    depositar(valorDeposito){
        this.saldo +=valorDeposito
    }
    sacar(valorSaque){
        this.saldo -= valorSaque
    }
    consultarSaldo(){
        return this.saldo
    }
}
    //criando uma instancia do objeto
    let x = new ContaBancaria()
    let y = new ContaBancaria()
   console.log( x.consultarSaldo())
