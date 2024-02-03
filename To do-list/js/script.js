let tasks = [];




let addTask = document.getElementById("addTask");
let contant = document.getElementById("contant");
let deleted = document.getElementById("deleted");
let cancel = document.getElementById("cancel");
let sure = document.getElementById("sure");
let input = document.getElementById("input");
let inputContaner = document.getElementById("add-new-task");
let pushTask = document.getElementById("push-task");
let alert = document.getElementById("alert");





addTask.addEventListener("click", () => {

  inputContaner.style.display = "flex";
  input.focus()
  alert.style.display = "none"
  pushTask.addEventListener("click",()=>{
    let newTask = input.value;
    if(newTask != ""){
      tasks.push({ taskName: newTask, done: false});
      input.value = "";
      inputContaner.style.display = "none";
      alert.style.display = "none"
      showTasks();
    }else{
      alert.style.display = "block"
    }
  })
});
const showTasks = () => {
  let cartona = "";
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].done === false) {
      cartona += `<div class="task m-auto w-75 shadwo my-4 rounded-pill bg-lght" id="done${i}" >
                    <div class="taskName">
                        <h3>${tasks[i].taskName}</h3>
                    </div>
                    <div class="btns">
                        <button class="btn  rounded-circle btn-outline-danger "  onclick="deleteTask(${i})">
                            <span class="material-symbols-outlined">
                                delete
                            </span>
                        </button>
                        <button class="btn  rounded-circle btn-outline-warning "  onclick="doneTask(${i})">
                                    <span class="material-symbols-outlined">
                                        done_outline
                                    </span>
                                </button>
                        </button>
                        <button class="btn  rounded-circle btn-outline-info" onclick="editTask(${i})" >
                            <span class="material-symbols-outlined">
                                edit
                            </span>
                        </button>
                    </div>
                </div>`
}else{
  cartona +=` <div class="task m-auto w-75  bg-warning   my-4 rounded-pill bg-opacity-25">
                <div class="taskName">
                    <h3 class="task-done">${tasks[i].taskName}</h3>
                </div>
                <div class="btns">
                    <button class="btn  rounded-circle btn-outline-danger "onclick="deleteTask(${i})">
                        <span class="material-symbols-outlined">
                            delete
                        </span>
                    </button>
                    <button class="btn  rounded-circle btn-outline-warning "onclick="undodoneTask(${i})">
                        <span class="material-symbols-outlined">
                            done_outline
                        </span>
                    </button>
                    <button class="btn  rounded-circle btn-outline-info "onclick="editTask(${i})">
                        <span class="material-symbols-outlined">
                            edit
                        </span>
                    </button>
                </div>
              </div>
`
}
  }
  contant.innerHTML =cartona;
}

const deleteTask = (e)=>{
  deleted.style.display = "flex";
  let num = e;
  const sureHandler = ()=>{
    tasks.splice(num,1);
    deleted.style.display = "none";
    showTasks();
    sure.removeEventListener("click", sureHandler);
    cancel.removeEventListener("click", cancelHandler);
  };
  const cancelHandler = ()=>{
    deleted.style.display = "none";
    sure.removeEventListener("click", sureHandler);
    cancel.removeEventListener("click", cancelHandler);
  };
  sure.addEventListener("click", sureHandler);
  cancel.addEventListener("click", cancelHandler);
};
const doneTask = (e)=>{
tasks[e].done = true;
showTasks();
}

const undodoneTask =(e)=>{
  tasks[e].done = false;
  showTasks();
}

const editTask = (e)=>{
  let newTaskName = window.prompt();
  tasks[e].taskName = newTaskName;
  showTasks();
}


let btttb = document.getElementById('btttb')
btttb.addEventListener("click", function(){
  tasks.splice(0)
  contant.innerHTML=''
})