import React,{Component} from 'react'
class Equipe extends Component {
    render() {
        return(
            <div>
                <Sobre nome={this.props.nome} cargo={this.props.cargo}
                idade={this.props.idade}/>
                <hr/>
            </div>
        )
    }
}
class Sobre extends Component {
    render() {
        return (
            <div>
            <h2> Ola sou o Matheus{this.props.nome}</h2>
            <h2>Cargo: {this.props.cago}</h2>
            <h3>Idade: {this.props.idade}</h3>
        </div>
        )
    }
}

function App(){
    return (
        <div>
           <h1>Conheça nossa equipe</h1>
           <Equipe nome="Maik" cargo="Programador" idade="21"/>
           <Equipe nome="William" cargo="Programador" idade="32"/>
        </div>
    )
}

export default App