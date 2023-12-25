import { v4 as uuidv4 } from 'uuid';
 
const userInput : HTMLInputElement|null = document.querySelector<HTMLInputElement>("#inputTodo");
const submitButtonForm : HTMLElement|null = document.querySelector<HTMLElement>("#new-task-form");
const list : HTMLElement|null = document.querySelector<HTMLUListElement>("#listOfTodos");

type todoInfo = {
    uuid: string,
    taskName: string,
    checked?: boolean
}

submitButtonForm?.addEventListener("submit", e => {
    e.preventDefault();
    console.log("user clicked.");
    if(userInput?.value == "" || userInput?.value == null) return;


    const task: todoInfo = {
        uuid: uuidv4(),
        taskName: userInput.value
    }

    addListItemToUI(task);
    userInput.value="";
})


function addListItemToUI(task:todoInfo){
    const item = document.createElement("li");
    const label = document.createElement("label");
    const checkBox = document.createElement("input");
    checkBox.addEventListener("change", () => {
        task.checked = checkBox.checked;
      })
    checkBox.type = "checkbox";
    label.append(checkBox,task.taskName);
    item.append(label);
    list?.append(item);
}
