// funçao que adiciona tarefa
 function addTask(){
     const taskTitle = document.querySelector("#task-title").value
    if(taskTitle){
        //clona o template
        const template = document.querySelector(".template")

        const newTask = template.cloneNode(true)
        

        //adiciona titulo para
        newTask.querySelector(".task-title").textContent = taskTitle

        //remover as classes desnecessarias
       newTask.classList.remove("template")
      newTask.classList.remove("hide")

//  adciona tarefa na lista
 const list = document.querySelector("#task-list")
list.appendChild(newTask)
    }
}

const addBtn = document.querySelector("#add-btn")

addBtn.addEventListener("click", function(e) {
    e.preventDefault();

    console.log("testando")
 addTask()

})