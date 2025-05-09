//1.
let changeColor = document.querySelector("#para");
let clickbtn = document.querySelector("#btn");
clickbtn.addEventListener("click",function(){
    changeColor.style.color="red";
});
//2
let tragetDiv = document.querySelector("#highlight");
tragetDiv.addEventListener("mouseover",function(){
    tragetDiv.classList.add("highlight");
});
tragetDiv.addEventListener("mouseleave",function(){
    tragetDiv.classList.remove("highlight");
});
//3
let toggleDiv = document.querySelector("#toggle");
toggleDiv.addEventListener("click",function(){
    toggleDiv.classList.toggle("dark-mode");
});
