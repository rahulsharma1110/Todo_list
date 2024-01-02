let form = document.getElementById("addForm")    
let itemList = document.getElementById("items")
let filter = document.getElementById("filter")

form.addEventListener("submit",function(x){
    x.preventDefault()
    let newitem= document.querySelector("#item").value

    let li = document.createElement("li")
    li.className = "list-group-item"
   //  alert("item add sucessfully","successfully")
   // let liist = document.getElementsByTagName("li")
    //liist[1].style.backgroundColor="yellow"


    let btn = document.createElement("button")
    btn.className = "btn btn-danger btn-sm float-right delete"
    btn.appendChild(document.createTextNode("x"))
    li.appendChild(document.createTextNode(newitem))
    li.appendChild(btn)
    itemList.appendChild(li)
   
    document.querySelector("#item").value = ''
})

itemList.addEventListener("click",function(e){
    if(e.target.classList.contains("delete")){
     if(confirm("are u sure")){
            itemList.removeChild(e.target.parentElement)
    }else{
            alert("bhai time paas mt kr ")
        }
        }
})

filter.addEventListener("keyup",function(y){
    let text = y.target.value.toLowerCase()
    let items=document.getElementsByTagName("li")
    Array.from(items).forEach(function(contant){
        let itemName = contant.firstChild.textContent
        if(itemName.toLowerCase().indexOf(text)!= -1){
            contant.style.display = "Block"
        }else{
            contant.style.display = "none"
        }
    })
   
})

  