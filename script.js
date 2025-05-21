const taskInput = document.getElementById("taskInput")
const addBtn = document.getElementById("addBtn")
const  taskList = document.getElementById("taskList")

addBtn.addEventListener("click",function(){
    taskText = taskInput.value.trim()



if(taskText !== ""){
    const li = document.createElement("li")
    li.textContent = taskText


li.addEventListener("click",function(){
    li.classList.toggle("Done");
})

const deleteBtn = document.createElement("button")
deleteBtn.textContent = "حذف"
deleteBtn.className = "delete-btn"

deleteBtn.addEventListener("click",function(e){
    // e.stopPropagation()
    li.remove()
})

li.appendChild(deleteBtn)
taskList.appendChild(li)


setTimeout(function(){
    li.classList.add("show");
  }, 10);

taskInput.value = ""
taskInput.focus()

}
});