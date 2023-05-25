let addtodobutt=document.getElementById('addtodo');
let todocontainer=document.getElementById('todocontainer');
let inputfield=document.getElementById('inputfield');

addtodobutt.addEventListener('click', function(){
var paragraph=document.createElement('p');
paragraph.classList.add('style');

paragraph.innerText=inputfield.value;


todocontainer.appendChild(paragraph);
inputfield.value="";

paragraph.addEventListener('click', function(){
paragraph.style.textDecoration="line-through";
paragraph.style.color="black";

})

paragraph.addEventListener('dblclick', function(){
todocontainer.removeChild(paragraph);

})


})

