import firebase  from './firebaseConnection'
import {useState} from 'react'
import './style.css'



 function App() {
const [titulo,setTitulo]= useState('')
const [autor,setAutor]= useState('')
const [posts, setPosts]= useState([])

async function handleAdd() {
  
  await firebase.firestore().collection('posts')
  .add({
    titulo:titulo,
    autor:autor
    
  })
  .then(() => {
    console.log('dados cadastrados com sucesso')
    setTitulo("")
    setAutor("")
  })
  .catch((error) => {
    console.log('gerrou erro'+error)
  })

}
async function buscaPost(){
  // await firebase.firestore().collection('posts')
  // .doc('1234')
  // .get()
  // .then((snapshot) => {
  //   setTitulo(snapshot.data().titulo)
  //   setAutor(snapshot.data().autor)

  // })
  // .catch(()=>{
  //   console.log('deu algum Erro')
  // })
  await firebase.firestore().collection('posts')
  .get()
  .then((snapshot)=>{
    let lista =[]
    snapshot.forEach((doc)=>{
      lista.push({
        id:doc.id,
        titulo: doc.data().titulo,
        autor: doc.data().autor,
      })
    })
    setPosts(lista)
  })
  .catch(()=>{
    console.log('deu algum Erro')
  })


}

  return (
    <div  >
      <div className="container">

      
      <h1>ReactJs +Firebase</h1><br/>
      <label>Titulo:</label>
      <textarea type="text" value={titulo} onChange={(e)=>setTitulo(e.target.value)}></textarea>
      <label>Autor:</label>
      <input type="text" value={autor} onChange={(e)=>setAutor(e.target.value)}/>

      <button onClick={handleAdd}>Cadastrar</button>
      <button onClick={buscaPost}>BuscarPost</button>

      <ul>
        {posts.map((posts) => {
          return(
            <li key={posts.id}>
              <span>Titulo: {posts.titulo}</span><br/>
              <span>Autor:{posts.autor}</span><br/><br/>

            </li>
          )
        })}
      </ul>
      </div>
    </div>
  )
}
export default App


