
let changeContent = document.getElementById("box");
changeContent.textContent = "hello World";
console.log(changeContent);
let targetPara = document.getElementsByTagName("p");
for(targetpa of targetPara){
  console.log(targetpa.textContent);
}

let classSelect = document.getElementsByClassName("highlight")[0];
classSelect.style.backgroundColor= "yellow";
let listFirst = document.querySelector("li");
listFirst.style.fontWeight="bold";
//section 2
let para = document.querySelector("#child");
parent = para.parentElement;
parent.style.backgroundColor="red";
let list = document.querySelector("#firstitem");
console.log(list.nextSibling);
console.log(list.nextElementSibling);
let Child = document.querySelector(".main");
console.log(Child.firstChild);
console.log(Child.firstElementChild);
console.log(Child.lastChild.nodeValue);
//section 3
let newPara = document.createElement("p");
newPara.textContent = "New content added!";
let mainDiv = document.querySelector("#new");
mainDiv.appendChild(newPara);
let children = mainDiv.children
console.log(children);
// section 4
let attributeName= document.querySelector("#new");
alert(attributeName.getAttribute("title"));
attributeName.setAttribute("data-role","admin");
console.log(attributeName.getAttribute("data-role"));
//section 5
let newClass = document.querySelector(".newclass");
newClass.classList.add("name");
newClass.classList.remove("name");
newClass.className = "main-style";
