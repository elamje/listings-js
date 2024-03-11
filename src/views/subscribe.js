import html from "./subscribe.html";
import "./subscribe.css";

let elements = [];
let body;

export function subscribe(link) {
  console.log("Subscribing to", link);
  // convert plain HTML string into DOM elements
  let temporary = document.createElement("div");
  temporary.innerHTML = html;
  temporary.getElementsByClassName("js-widget-dialog")[0].textContent = link;

  // append elements to body
  body = document.getElementsByTagName("body")[0];
  while (temporary.children.length > 0) {
    elements.push(temporary.children[0]);
    body.appendChild(temporary.children[0]);
  }

  body.addEventListener("click", close);
}

export function close() {
  while (elements.length > 0) {
    elements.pop().remove();
  }
  body.removeEventListener("click", close);
}
