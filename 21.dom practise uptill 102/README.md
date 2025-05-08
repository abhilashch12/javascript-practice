Here’s a **nicely formatted README section** summarizing what you've learned so far about the DOM. You can paste this directly into your README file for documentation and review.

---

# 📚 JavaScript DOM – Learning Progress

This section documents my progress in learning the **JavaScript DOM (Document Object Model)** through video tutorials. It includes short descriptions of each concept covered up to `classList` and `className`.

---

## ✅ Completed Topics

### `1. DOM - Intro` *(3 min)*

Basic overview of what the DOM is — the browser’s internal tree-like structure that represents HTML elements as objects that can be manipulated using JavaScript.

---

### `2. General Concepts` *(9 min)*

Covers:

* How the DOM represents HTML as a tree
* Nodes vs Elements
* Node types (Element, Text, Comment)
* DOM manipulations using JavaScript

---

### `3. Window and Document Overview` *(4 min)*

* `window`: Global object representing the browser window
* `document`: Entry point to access and manipulate the DOM

---

### `4. getElementById()` *(7 min)*

* Selects one element by ID
* Syntax:

  ```js
  const el = document.getElementById("myId");
  ```

---

### `5. getElementsByTagName()` *(8 min)*

* Selects all elements with a specific tag (e.g., all `<p>`)
* Returns an HTMLCollection

  ```js
  const paragraphs = document.getElementsByTagName("p");
  ```

---

### `6. getElementsByClassName()` *(2 min)*

* Selects all elements with a specific class
* Returns an HTMLCollection

  ```js
  const boxes = document.getElementsByClassName("box");
  ```

---

### `7. querySelector()` and `querySelectorAll()` *(7 min)*

* `querySelector`: Returns the **first** matching element
* `querySelectorAll`: Returns **all** matching elements (NodeList)

  ```js
  const firstItem = document.querySelector(".item");
  const allItems = document.querySelectorAll(".item");
  ```

---

### `8. Navigating the DOM – Children` *(5 min)*

* `element.children`: All direct children elements
* `element.childNodes`: Includes text nodes (like whitespaces)
* `element.firstElementChild`, `element.lastElementChild`

---

### `9. parentElement` *(3 min)*

* Access the parent of an element

  ```js
  const parent = element.parentElement;
  ```

---

### `10. nextSibling`, `previousSibling` *(4 min)*

* May return **text nodes** (like whitespace)
* Use carefully

  ```js
  element.nextSibling;
  element.previousSibling;
  ```

---

### `11. nextElementSibling`, `previousElementSibling` *(1 min)*

* Better for element-only traversal (ignores whitespace)

  ```js
  element.nextElementSibling;
  element.previousElementSibling;
  ```

---

### `12. textContent` vs `nodeValue` *(3 min)*

* `textContent`: Reads/changes text of an element
* `nodeValue`: Works on text nodes, may return whitespace

  ```js
  element.textContent = "New text";
  element.firstChild.nodeValue;
  ```

---

### `13. getAttribute()` and `setAttribute()` *(8 min)*

* `getAttribute(attr)`: Gets value of an attribute
* `setAttribute(attr, value)`: Sets or adds an attribute

  ```js
  element.setAttribute("class", "active");
  element.getAttribute("title");
  ```

---

### `14. classList` vs `className` *(Covered till now)*

* `classList`: Modern, powerful way to manipulate classes

  ```js
  element.classList.add("red");
  element.classList.remove("blue");
  element.classList.toggle("hidden");
  ```
* `className`: Replaces the entire class string

  ```js
  element.className = "new-class";
  ```

---


