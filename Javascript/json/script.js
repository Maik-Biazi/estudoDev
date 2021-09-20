const objs = [
    {
        nome: 'Matheus',
        idade: 30,
        esta_trabalhando: true,
        detalhes_profissao: {
            profissao: 'Programador',
            empresa: 'Empresa x',
        },
        hobbies: ['Programar','Correr','Ler']
    },
    {
        nome: 'Joao',
        idade: 25,
        esta_trabalhando: false,
        detalhes_profissao: {
            profissao: null,
            empresa: null,
        },
        hobbies: ['Jogar','Academia']

    },
    
]
//JSON
//conerter objetos para json
const jsonData = JSON.stringify(objs)
console.log(jsonData)

//converter json para objetos

const objData = JSON.parse(jsonData)
console.log(objData)

objData.map((pessoa)=>{
console.log(pessoa.nome)
})

