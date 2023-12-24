/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
import { v4 as uuidv4 } from 'uuid';
console.log(uuidv4()); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
 
/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
// import { v4 as uuidv4 } from 'uuid';
// console.log(uuidv4()); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
 

const userInput : HTMLInputElement|null = document.querySelector<HTMLInputElement>("#inputTodo");
const submitButtonForm : HTMLElement|null = document.querySelector<HTMLElement>("#new-task-form");
const list : HTMLElement|null = document.querySelector<HTMLUListElement>("#listOfTodos");

submitButtonForm?.addEventListener("submit", e => {
    e.preventDefault();
    console.log("user clicked.")
    if (userInput?.value == "") return
    else{
        const userInputTodo: string | undefined = userInput?.value;
        console.log(userInputTodo);
    }
    
})
