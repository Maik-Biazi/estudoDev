import React from 'react'
const Equipe = (props)=>{
    return (
        <div>
            <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade}/>
            <Social face={props.face} insta={props.insta}/>
        </div>
    )
}

const Sobre =(props)=>{
    return (
        <div>
            <h2>Olá sou o (a){props.nome}</h2>
        </div>
    )
}
const Social =(props)=>{
    return (
        <div>
            <h2>Meu Facebook é {props.face} e meu Insta{props.insta}</h2>
        </div>
    )
}


function App(){
    return (
        <div>
            <h1>Conheça nossa Equipe</h1>
            <Equipe nome="Maik" cargo="Programador"/>
            <Social  face="facebook" insta="instagram"/>
            
        </div>
    )
}

export default App