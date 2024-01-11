const todoList = [{
    name:'Make dinner' ,
    duedate :'2024-01-10'} ,{
    name:'Make dinner' ,
    duedate :'2024-01-10'
    }];

renderTodoList();

function renderTodoList(){
    let todolistHTML = '';
    for(let i = 0;i<todoList.length;i++){
        const todoObject = todoList[i];
        const {name ,duedate} = todoObject; //destructuring
        //const name = todoObject.name;
        // const dueDate = todoObject.duedate;
        const html = `
        <div> ${name}</div>
        <div> ${duedate}</div>
        <button onclick="
                todoList.splice(${i}, 1);
                renderTodoList();
            " class="delete-todo-btn">Delete
        </button>`;
        todolistHTML += html;

    }
    // console.log(todolistHTML);
    document.querySelector('.js-todo-list').innerHTML = todolistHTML;


}


function addTodo(){
    const inputElement = document.querySelector('.js-name-input');

    const name = inputElement.value; // value property represent the text inside the input
    // console.log(name); 
    const dateInputElement = document.querySelector('.js-due-date');
    const duedate = dateInputElement.value;

    //add inputs to array
    todoList.push({
        // name:name,
        // duedate:duedate
        name ,  duedate // this can be use if the name and property is same
    });

    // console.log(todoList);

    

    inputElement.value = ''; // reset after adding one task

    renderTodoList();
}