var x =0;

myTimer =setTimeout(function() {
    console.log('o x é 0')
},1500)

x =5;

if(x > 0) {
    clearTimeout(myTimer)
    console.log('o x passou de 0')
}
// clearInterval
var myInterval = setInterval(function() {
    console.log('imprimindo interval')
},500)

setTimeout(function() {
    console.log('nao precisamos mais repetir')
        clearInterval(myInterval)
},1500)
