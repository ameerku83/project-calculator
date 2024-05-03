function buttonclick(val) {
 document.getElementById("screen").value =document.getElementById("screen").value+ val;
 
}
function clearDisplay() {
  document.getElementById("screen").value = "";
}
function equalClick() {
//  let text = document.getElementById("screen").value;
 let result = eval(document.getElementById("screen").value);
  document.getElementById("screen").value = result;
}

function myFunction(event) { 
  if (event.key =='i'
   
   ) 
    {document.getElementById("count").innerHTML=c++}
     if (event.key == 'd'){
      {document.getElementById("count").innerHTML=c--}
    }
   
} 

function deleteValue() {
  document.getElementById("screen").value=document.getElementById("screen").value.slice(0,-1)
 
  
}
function square() {
//  let sq=Number( document.getElementById("screen").value)
 
//  document.getElementById("screen").value=sq*sq
 
document.getElementById("screen").value=Math.pow((document.getElementById("screen").value),2)
  
}
function root() {
  //  let sq=Number( document.getElementById("screen").value)
   
  //  document.getElementById("screen").value=sq*sq
   
  document.getElementById("screen").value=Math.sqrt((document.getElementById("screen").value))
    
  }

let c=0
const onch=(co)=>{
  c+=co 
  document.getElementById("count").innerHTML=c 


  
}
function reset(){
 c=0
  document.getElementById("count").innerHTML=c 
}






var content = document.getElementsByTagName("body")[0]
var darkmode=document.getElementById("dark-change")
darkmode.addEventListener("click",function(){
  darkmode.classList.toggle("active");
  content.classList.toggle("night")
  
}
)