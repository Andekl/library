window.addEventListener('load', function(){

let buttonAdd = document.getElementById('buttonAdd')
let buttonDelete = document.getElementById('buttonDelete')
let authorInput = document.getElementById('authorInput')
let bookInput = document.getElementById('bookInput')
let list = document.getElementById('list')
let requestBtn = document.getElementById('requestBtn')

let url ='https://www.forverkliga.se/JavaScript/api/crud.php?requestKey'
let titleInput = bookInput.value;
let authorInut = authorInput.value;

function sendAjax(){
  let responseDiv = document.getElementById('response');
  fetch(url)
  .then ( response => {
    console.log('Response from server: ',response)
    return response.text();
  })
  .then (text => {
    console.log('We got text: ', text);
    responseDiv.innerText = text;
  })
}
requestBtn.addEventListener('click', sendAjax);


/*
let idCounter = 0;
//Add author and book to the top of the list
  buttonAdd.addEventListener('click', function(event){
    idCounter++;
    let id = 'id'+idCounter;//Creates a unique valid id
    const li = document.createElement('li');//Creates new li element
    const btn = document.createElement("BUTTON");//Creates new button with the element
    const btnText = document.createTextNode("CLICK ME");//Button text
    li.innerText ="Author: "+authorInput.value+" Title: "+ bookInput.value
    let first = document.querySelector('ul :first-child');//Finds first li-element
    btn.id = id;//Sets unique id to the new button
    console.log(id);
    btn.appendChild(btnText);//Sets text to the new button
    list.insertBefore(li, first);
    list.insertBefore(btn, first);

  });

  //Delete the latest author and book from the list
  buttonDelete.addEventListener('click',event =>{
    let first = document.querySelector('ul :first-child')

    if(first !== null)
      //list.removeChild(first);
      list.removeChild()
  });*/

})
