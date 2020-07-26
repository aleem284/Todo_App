var list=document.getElementById("list")

function addTodo(){

    var todo_item=document.getElementById("todo-item")

    var li=document.createElement("li")
    var liText=document.createTextNode(todo_item.value)
    li.appendChild(liText)
    
    var dltBtn=document.createElement("button")
    var btntext=document.createTextNode("Delete")
    dltBtn.appendChild(btntext)
    dltBtn.setAttribute("class","btn")
    dltBtn.setAttribute("onclick","deleteItem(this)")

    var editBtn=document.createElement("button")
    var editText=document.createTextNode('Edit')
    editBtn.appendChild(editText)
    editBtn.setAttribute("onclick","editItem(this)")


    
    li.appendChild(dltBtn)
    li.appendChild(editBtn)
    
    list.appendChild(li)
    todo_item.value=""



    console.log(list)
}

function editItem(e){
    var editVal=prompt("Enter edit task",e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue=editVal
}


function deleteItem(e){
    e.parentNode.remove()
}

function deleteAll(){
    list.innerHTML=""
}


