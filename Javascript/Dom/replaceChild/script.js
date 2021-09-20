//cria um elemento
var el = document.createElement("h3")

el.classList = "testando-classe"

var texto = document.createTextNode("este é o texto")

el.appendChild(texto)
//selecionar o elemento que quero trocar

var title = document.querySelector("#title")


//selecionar o pai do el
var pai = title.parentNode

//trocar os elementos

pai.replaceChild(el,title)

