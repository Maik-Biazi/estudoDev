class Tv{
    constructor(){
        this._relacaoCanais = Array(2,4,5,7,10)
        this._canalAtivo = 5
        this._volume =5
    }
    //getters setters
    get canalAtivo(){
        return this._canalAtivo
    }
    set canalAtico(canal){
        //
        if(this._relacaoCanais.indexOf(canal) !== -1){
            this._canalAtivo =canal
        }
        
    }
}

let tv = new Tv()
    tv.canalAtico =10
  console.log( tv.canalAtivo)