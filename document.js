window.addEventListener('load', function(){

let buttonAdd = document.getElementById('buttonAdd')
let buttonDelete = document.getElementById('buttonDelete')
let authorInput = document.getElementById('authorInput')
let bookInput = document.getElementById('bookInput')
let list = document.getElementById('list')
let requestBtn = document.getElementById('requestBtn')
let buttonView = document.getElementById('buttonView')

let author = authorInput.value
let title = bookInput.value

let url ='https://www.forverkliga.se/JavaScript/api/crud.php'
let request_qs = '?requestKey'

let key = 'EPAR3'

//Request function key button
/*function sendAjax(){
  let responseDiv = document.getElementById('response');
  fetch(url+request_qs)
  .then ( response => {
    console.log('Response from server: ',response)
    return response.text();
  })
  .then (text => {
    console.log('We got text: ', text);
    responseDiv.innerText = text;
  })
}
requestBtn.addEventListener('click', sendAjax);*/

function addTitle_Author(){
  let author = authorInput.value
  let title = bookInput.value
  let add_query = `?op=insert&title=${title}&author=${author}&key=${key}`;
  fetch(url+add_query)
  .then ( response => {
    console.log('added '+title+' '+author)
    return response.json();
  })
}
let counter = 0;
function viewTitle_Author(){
  let author = authorInput.value
  let title = bookInput.value
  let responseUl = document.getElementById('list');
  let view_query = `?op=select&key=${key}`;
  fetch(url+view_query)
    .then( response =>{
      console.log('getting table')
      return response.json();
    })
    .then(obj =>{
      if(counter === 1){
        list.innerText = 'request denied, try again'
        console.log(obj.data);
        counter = 0;
      }
      else if(obj.status === 'success'){
        console.log(obj);
        console.log(counter);
        console.log(obj.data);

        list.innerHTML = obj.data.map( book => `${book.title} by ${book.author} <br></br>` )
      }
      else{
        counter++;
        console.log(counter);
         viewTitle_Author();
       }
    })

}

//Add author and book to the top of the list
  buttonAdd.addEventListener('click', addTitle_Author);
  buttonView.addEventListener('click',viewTitle_Author);

  //Delete the latest author and book from the list
  buttonDelete.addEventListener('click',event =>{
    let first = document.querySelector('ul :first-child')

    if(first !== null)
      //list.removeChild(first);
      list.removeChild()
  });

})
