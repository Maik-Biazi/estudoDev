
function distribuiCaracter() {
    //selecionar o valor digitado
    var caracter = document.getElementById("entrada").value
    //limpar o campo de digitaçao
    document.getElementById("entrada").value = ""
    caracter.trim()
    switch (caracter) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            //adicionar o caracter ao campo referente a numero
            document.getElementById("apenas_numeros").value += caracter
            break
            default:
                //adicionar o caracter ao campo referente a letras
                document.getElementById("apenas_letras").value += caracter
    }
}