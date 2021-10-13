//elementos

var vbtIniciar
var vbola
var vcpu
var vjogador
var vPainletxtPontos
//controle de animaçao
var game, frames

// Posiçoes
var posBolaX, posBolaY
var posJogadorX, posJogadorY, posCpuX, posCpuY

//direçao de acordo co a tecla
var dirJy

//Posiçoes iniciais
var posJogIniY = 180, posCpuIniY = 180,
   posBolaIniX = 475, posBolaIniY = 240

// Tamanhos
var campoX = 0, campoY = 0, campoW = 960, campoH = 500

var barraW = 20, barraH = 140, bolaW = 20, bolaH = 20

//direcao
var bolaX, bolaY
var cpuY = 0

//VELOCIDADE
var velBola, velCpu, velJogador

//controle
var pontos = 0
var tecla;
jogo = false


function controlaJog(){
   if(jogo){
      posJogadorY+=velJogador*dirJy
      vjogador.style.top= posJogadorY+"px"
   }
}

function teclaDw(){
   tecla = event.keyCode
   if(tecla ==38){ //cima
      dirJy=-1

   }else if(tecla ==40){//Baixa
      dirJy =+1
   }
}
function teclaUp(){
   tecla = event.keyCode
   if(tecla ==38){ //cima
      dirJy=0

   }else if(tecla ==40){//Baixa
      dirJy=0
   }
}
function game(){
   if(jogo){
      controlaJog()
   }
   frames = requestAnimationFrame(game)
}



function iniciaJogo() {
   if (!jogo) {
      cancelAnimationFrame(frames)
      jogo = true
      dirJy = 0
      posBolaX = posBolaIniX
      posBolaY = posBolaIniY
      posJogadorY = 0
      posCpuY = posCpuIniY
      game()
   }
}

function inicializa() {

   velBola=velCpu=velJogador=8
   vbtIniciar = document.getElementById("btIniciar")
   vbtIniciar.addEventListener("click" , iniciaJogo)
   vjogador = document.getElementById("dvJogador")
   vcpu = document.getElementById("dvCpu")
   vbola = document.getElementById("dvBola")
   vPainletxtPontos = document.getElementById("textPontos")
   document.addEventListener("keydown" , teclaDw)
   document.addEventListener("keyUp" , teclaUp)


}

window.addEventListener("load", inicializa)
