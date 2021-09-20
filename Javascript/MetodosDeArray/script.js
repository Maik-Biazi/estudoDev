// length

var arr=[1,2,3,4,5]

console.log(arr.length)

//push adiciona no final do array
arr.push(6)
arr.push("Qualquer coisa")

//pop remove do array
arr.pop()


//unshift adiciona no começo
arr.unshift(0)

//shift remove no começo

arr.shift()


// acessar o ultimo elemento de

arr[arr.length -1]


//isArray verica se é array

Array.isArray(arr)

///////////////////////////////////////////////////////////

//splice array adiciona elemento no meio
var arr=[1,2,3,4,5]

arr.splice(2,0,999)

arr.splice(4,1) //remove elemento especifico

// retorna uma string
var arr2 =[" o" ,"rato", "a", "roupa"]

arr2.join(",")

//reverse  inverte os array 

arr2.reverse()
