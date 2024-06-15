
/*let todoList = [];
displayitem();

function addTodo(){
  let inputElement = document.querySelector('#todoinput');
  let dateelement = document.querySelector('#tododate');
  let todoItem = inputElement.value;
  let tododate = dateelement.value;
  todoList.push({item:todoItem,duedate : tododate});
  inputElement.value = '';
  dateelement.value = '';

  displayitem();
}

function displayitem(){
  let containerElement = document.querySelector('.todo-container');
  
  let newHtml = ``;

  for(let i=0; i<todoList.length; i++){
    let item = todoList[i].item;
    let duedate = todoList[i].duedate;

    newHtml += `<div>
                <span>${item}</span>
                <span>${duedate}</span>
                <button Onclick="todoList.splice(${i},1);  displayitem();">delete</button> 
                </div>`;
              }            
   containerElement.innerHTML = newHtml;
  
}*/
let todoList = [];
displayitem();

function addTodo() {
  let inputElement = document.querySelector('#todoinput');
  let dateElement = document.querySelector('#tododate');
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;

 
    todoList.push({ item: todoItem, duedate: todoDate });
    inputElement.value = '';
    dateElement.value = '';

    displayitem();
  } 

function displayitem() {
  let containerElement = document.querySelector('.todo-container');
  
  let newHtml = '';

  for (let i = 0; i < todoList.length; i++) {
    let item = todoList[i].item;
    let duedate = todoList[i].duedate;

    newHtml += `
                  <span>${item}</span>
                  <span>${duedate}</span>
                  <button class="btn-dlt" onclick="deleteTodo(${i})">Delete</button> 
                `;
  }            
  containerElement.innerHTML = newHtml;
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  displayitem();
}

