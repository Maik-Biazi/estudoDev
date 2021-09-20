function adicionaParagrafo() {
    // Adiciona um paragrafo no Html

    var novoParagrafo = document.createElement("p")

    var texto = document.createTextNode("Este é o conteudo do paragrafo")

    novoParagrafo.appendChild(texto)

    novoParagrafo.classList.add('novoParagrafo')

    var body = document.querySelector("body")

    console.log(body)

    body.appendChild(novoParagrafo)


}

function adicionaContainer() {
    // Adiciona um container No Html

    var container = document.getElementById("container")


    var el = document.createElement("div")// aqui definimos qual elementos queremos criar

    el.appendChild(document.createTextNode("texto da div"))

    el.classList.add("container") // aqui esta pegando uma class e estilizando ela

    container.appendChild(el)


}

function removerParagrafo() {

    //removendo o elemento filho
    var container = document.querySelector("#container")// aqui esta pegando Id  do Html 

    var p = document.querySelector("#container p") // aqui é o mapeamento 

    container.removeChild(p) // aqui é variavel que irei remover
}

function removeElemento() {
    //remover o elemento do html
    var subtitle = document.querySelector(".subtitulo")

    subtitle.remove();
}
function alterarDomFor() {
    //Alterando o dom com o laço for
    var lista = ['Laranja', 'Maça', 'Pera', 'Jaca', 'limao']


    var listaUl = document.createElement('ul')

    var body = document.getElementsByTagName('body')

    body[0].appendChild(listaUl)

    var listaNoBody = document.getElementsByTagName('ul')

    for (var i = 0; i < lista.length; i++) {
        var lifor = document.createElement('li')
        var textoLi = document.createTextNode(lista[i])
        lifor.appendChild(textoLi)

        listaNoBody[0].appendChild(lifor)
    }

}





