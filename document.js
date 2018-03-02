window.addEventListener('load', function(){

let buttonAdd = document.getElementById('buttonAdd')
let buttonDelete = document.getElementById('buttonDelete')
let authorInput = document.getElementById('authorInput')
let bookInput = document.getElementById('bookInput')
let list = document.getElementById('list')

//Add author and book to the top of the list
  buttonAdd.addEventListener('click', function(event){
    const li = document.createElement('li');//Creates new li element
    const btn = document.createElement("BUTTON");//Creates new button with the element
    const t = document.createTextNode("CLICK ME");//Button text
    li.innerText ="Author: "+authorInput.value+" Title: "+ bookInput.value
    let first = document.querySelector('ul :first-child');//Finds first li-element
    list.insertBefore(li, first,);
    btn.appendChild(t);
    list.insertBefore(btn, first);
  });

  //Delete the latest author and book from the list
  buttonDelete.addEventListener('click',event =>{
    let first = document.querySelector('ul :first-child')

    if(first !== null)
      list.removeChild(first);
  });

})
