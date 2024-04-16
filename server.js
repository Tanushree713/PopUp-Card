let container = document.getElementById("container") 

document.addEventListener("click" , function(event) 
         {createCircle(event.clientX , event.clientY)})
function createCircle(x , y){
   let  circle  = document.createElement("div")
   circle.classList.add("circle")
   circle.style.left = x + "px"
   circle.style.top = y + "px"
   container.appendChild(circle)

}         