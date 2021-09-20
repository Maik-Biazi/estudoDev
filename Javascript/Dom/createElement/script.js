// createElement cria um html pelo js
var novoParagrafo = document.createElement("p")

var texto = document.createTextNode("Este é o conteudo do paragrafo")

novoParagrafo.appendChild(texto)

var body = document.querySelector("body")

body.appendChild(novoParagrafo)



//////////////////////////////////////////////////////////////
//inserir 

var container = document.getElementById("container")

var el =document.createElement("span")

el.appendChild(document.createTextNode("textdo do span"))

container.appendChild(el)