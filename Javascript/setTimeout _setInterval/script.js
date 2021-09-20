//setTimeout
//ele executa uma funçao depois de um determinado tempo

console.log("antes do seTtimeout")
setTimeout(function(){

    console.log("testando o setTimeout")



},5000)//aqui é definino em quanto tempo sera executado 
console.log("DEPOIS do seTtimeout")

//setInterval
setInterval(function(){
    console.log("Testando setInterval")
},3000)