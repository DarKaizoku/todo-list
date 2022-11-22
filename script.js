// This is the array that will hold the todo list items
let todoItems = [];
let cptPosition = 0;

function addTodo(text)
{
    // This function will create a new todo object based on the
    // text that was entered in the text input, and push it into
    // the `todoItems` array
    
    let item = {
        name : text,
        position : cptPosition
    };
    todoItems.push(item);
    
    return console.log(todoItems);
    
};



function renderTodo(todo)
{
    // Select the first element with a class of `todo-list`
    const todoList = document.getElementsByClassName('todo-list')[0];
    // Create an `li` element and assign it to the`ul`
    let newLi = document.createElement('li');
    let newCheckBox = document.createElement(`input`);
    console.log(newCheckBox);
    // Set the contents of the `li` element created above
    newCheckBox.setAttribute("type","checkbox");
    newCheckBox.setAttribute("id",todo.name);
    let newContent = document.createTextNode(todo.name);
    newLi.appendChild(newCheckBox);
    newLi.appendChild(newContent);
    console.log(newLi);
    // Append the element to the DOM as the last child of
    // the element referenced by the `list` variable
    todoList.appendChild(newLi);
    return;

}


function toggleDone(key)
{
    // Locate the todo item in the todoItems array and set its checked
    // property to the opposite. That means, `true` will become `false` and vice
    // versa.

    //Test 1
    /* const refKEY = document.getElementById(key)
    if (refKEY === key ){
        if(refKEY.checked == true){
            return refKEY.checked = false;
        }
        else {return refKEY.checked= true};
    }
    else{
        
    } */
    // si click -> fct toggleDone !!
    if (document.getElementById(key).checked == true){
           return console.log('test du true !');
    }
    else{return console.log("test du false");

    };
};

//document.getElementsByClassName('todo-list')[].addEventListener('checked', () => toggleDone(key));
let checkBOX = document.querySelector('input[type=checkbox]');
if (cptPosition>0){console.log(checkBOX)};


// Select the form element
const form = document.getElementById("todo-form");

// Add a submit event listener
form.addEventListener('submit', event =>
{
    // prevent page refresh on form submission
    event.preventDefault();

    //console.log(event);

    // select the text input
    const textInput = document.getElementById("todo-input").value;
    // Get the value of the input
    console.log(textInput);
    // send the value to the addTodo function
    addTodo(textInput);
    cptPosition++;
    renderTodo(todoItems[todoItems.length-1]); 

    //console.log(document.getElementById("111").checked); Test de fonctionnement de checked !! reussi
    
    toggleDone(textInput);

});

