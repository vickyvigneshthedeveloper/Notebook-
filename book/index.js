var pop=document.querySelector('.pop')
var popupbox=document.querySelector('.popup-box')
var adddu = document.getElementById('addbut')

adddu.addEventListener("click",function(){
    pop.style.display="block"
    popupbox.style.display="block"
})

var cancel=document.getElementById('cancel')
cancel.addEventListener("click",function(event){
    event.preventDefault()
    pop.style.display="none"
    popupbox.style.display="none"
})

var container=document.querySelector('.container')
var addbook=document.getElementById('add-book')
var title=document.getElementById('title')
var author=document.getElementById('author')
var bookdesc=document.getElementById('book-des')

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","book-con")
    div.innerHTML=`<h2>${title.value}</h2>
    <h4>${author.value}</h4>
    <p>${bookdesc.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    pop.style.display="none"
    popupbox.style.display="none"

})

function deletebook(event)
{
    event.target.parentElement.remove()

}
