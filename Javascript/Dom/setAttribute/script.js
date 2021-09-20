//adcionando uma classe como atributo
var title = document.querySelector("#title")
title.setAttribute("class", "testando-atributo")
console.log(title)

// desativando um bottao 

var btn = document.querySelector("#btn")
btn.setAttribute("disabled","disabled")



var subtitle = document.querySelector(".subtitle")

subtitle.setAttribute("id","titulo-2")


//remover atributo

var lista = document.querySelector("#lista")
lista.removeAttribute("id")
