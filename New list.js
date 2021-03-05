let listItems = document.querySelector('#list'); // this is the unordered list
let addButton = document.querySelector('#add-button'); // this is the add-button 
let inputField = document.querySelector("#myInput"); // this is the input field


// When a list item is clicked, it will be striked out, then removed after 1 second
listItems.addEventListener('click', function(event){
    setTimeout(function () {
        event.target.remove(); 
    }, 1000); 
    strikethrough()
});

// Function created to run the strikethrough text decoration when items are removed
function strikethrough(){
    event.target.style.textDecoration = "line-through";
}

// Allows users to add a list item to the list
addButton.addEventListener('click', function (event) {
    let inputText = inputField.value;
    let listItem = document.createElement('li');
    listItem.className = "list-item";
    document.querySelector('ul').append(listItem);
    listItem.innerHTML = inputText;
    inputField.value = "";
});