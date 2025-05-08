//103
let newElement = document.createElement("ul");
let textNew = document.createTextNode("Apple");
let textNewone = document.createTextNode("Banana");
let textNewtwo = document.createTextNode("Cherry");
newElement.appendChild(textNew);
newElement.appendChild(textNewone);
newElement.appendChild(textNewtwo);
//104
let newLi = document.createElement("li");
let newCont = document.createTextNode("Apple");
newLi.appendChild(newCont);
let mainUl = document.querySelector("#fruits");
mainUl.insertBefore(newLi,cherry);
//105
let newLine = document.createElement("li");
let newtextConst = document.createTextNode("Green");
newLine.appendChild(newtextConst);
let TargetMain = document.querySelector("#colors");
let secondTarget = document.querySelector("#blue");
TargetMain.replaceChild(newLine,secondTarget);
//106
let prependNew = document.createElement("h2");
prependNew.innerText =`Welcome`;
document.body.prepend(prependNew);
//107
let removeMe= document.querySelector("#removeme");
removeMe.remove();
let Secondlist = document.getElementById("myList");
let seconditem = Secondlist.children[1];
Secondlist.remove(seconditem);
//108
let divContent = document.getElementById("box");
divContent.textContent=`<b>Hello World</b>`;
console.log(divContent);
divContent.innerHTML=`<b>Hello World</b>`;
console.log(divContent);





