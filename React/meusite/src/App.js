
import React,{useState,useEffect} from "react"

function App() {

  const [tarefas,setTarefa] = useState([
    'pagar a conta de luz',
  'estudar React Hooks'])
  const [input,setInput] =useState("")

  useEffect(()=>{
    localStorage.setItem('tarefas',JSON.stringify(tarefas))
  },[tarefas])
  return (
    <div >
     <h1>
       <ul>
         {tarefas.map(tarefa =>(
           <li key={tarefa}>{tarefa}</li>
         ))}

       </ul>
     </h1>
    </div>
  )
}

export default App;
