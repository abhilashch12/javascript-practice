🚀 Concepts Covered
createElement, createTextNode, appendChild
Learn how to create new HTML elements and append them to the DOM.

insertBefore
Understand how to insert a new node before an existing one.

replaceChild
Learn how to replace an existing child node with a new node.

prepend, innerText
Learn how to prepend content to an element and set the text inside elements.

remove, removeChild
Learn how to remove elements from the DOM.

innerHTML vs textContent
Understand the difference between setting HTML content (innerHTML) and plain text (textContent).

📚 Details of Each Concept
03. createElement - createTextNode - appendChild
Description:
These methods allow you to create new HTML elements and text nodes and append them to the DOM.

Usage:

javascript
Copy
Edit
let newElement = document.createElement("li");
let newText = document.createTextNode("Apple");
newElement.appendChild(newText);
document.body.appendChild(newElement); // Adds to the document body
104. insertBefore
Description:
The insertBefore() method inserts a new node as a child of a specified parent node, before a specified existing child node.

Usage:

javascript
Copy
Edit
let newLi = document.createElement("li");
newLi.textContent = "Orange";
let list = document.querySelector("ul");
let secondItem = list.children[1];
list.insertBefore(newLi, secondItem); // Inserts before second item
105. replaceChild
Description:
The replaceChild() method replaces an existing child node with a new node.

Usage:

javascript
Copy
Edit
let newLi = document.createElement("li");
newLi.textContent = "Green Apple";
let list = document.querySelector("ul");
let oldItem = document.querySelector("#apple");
list.replaceChild(newLi, oldItem); // Replaces old item with new item
106. prepend, innerText
Description:
The prepend() method adds one or more nodes to the beginning of a parent node. innerText is used to set or get the visible text content inside an element.

Usage:

javascript
Copy
Edit
let header = document.createElement("h2");
header.innerText = "Welcome to the fruit shop!";
document.body.prepend(header); // Adds header at the beginning of body
107. remove, removeChild
Description:
The remove() method removes the element from the DOM. removeChild() removes a specific child element from its parent node.

Usage:

javascript
Copy
Edit
// Using remove()
let removeMe = document.querySelector("#removeMe");
removeMe.remove(); // Removes the element

// Using removeChild()
let list = document.querySelector("#fruitList");
let secondItem = list.children[1];
list.removeChild(secondItem); // Removes the second item in the list
108. innerHTML vs textContent
Description:
innerHTML allows you to get or set HTML content inside an element (can include tags). textContent gets or sets plain text inside an element (ignores HTML tags).

Usage:

javascript
Copy
Edit
// Using innerHTML
let divContent = document.getElementById("box");
divContent.innerHTML = "<b>Hello World</b>"; // Renders as HTML (Bold text)

// Using textContent
let divContent2 = document.getElementById("box");
divContent2.textContent = "<b>Hello World</b>"; // Displays as plain text