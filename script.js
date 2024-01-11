let toDoList=[];
let toDoListDate=[];
function addToDo()
{   
    let inputElement=document.querySelector('#input').value;
    let inputDate=document.querySelector('#date').value;
    toDoList.push(inputElement);
    toDoListDate.push(inputDate);
    inputElement='';
    inputDate='';
    document.querySelector('#input').value='';
    document.querySelector('#date').value='';
    displayItems();
    

}

function displayItems()
{
    let innerhtml='';
    for(let i=0;i<toDoList.length;i++)
    {
        innerhtml+=`
         <span class="second">${toDoList[i]}</span>
         <span class="second">${toDoListDate[i]}</span>
        
         <button id="delete" class="second" onclick="toDoList.splice(${i},1); toDoListDate.splice(${i},1); displayItems();">Delete</button>
        
        `;
    }
    document.querySelector('#todo-container').innerHTML=innerhtml;
}
function isValid()
{ let input=document.querySelector('#input').value;
  let date=document.querySelector('#date').value;
  if(input!=''&&date!='')
  {
    addToDo();
  }
  else{
    alert('No valid Input');
  }
}