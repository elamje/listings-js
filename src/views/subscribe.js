import html from "./subscribe.html";
import "./subscribe.css";

let elements = [];
let body;

export function subscribe(channelSlug) {
  console.log("Subscribe Subscribing to", channelSlug);
  // convert plain HTML string into DOM elements
  let temporary = document.createElement("div");
  temporary.innerHTML = html;

  temporary.getElementsByClassName(
    "channel-slug"
  )[0].innerHTML = `Channel: ${channelSlug}`;

  // append elements to body
  body = document.getElementsByTagName("body")[0];
  while (temporary.children.length > 0) {
    elements.push(temporary.children[0]);
    body.appendChild(temporary.children[0]);
  }

  document
    .getElementById("email-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      // replace with production URL
      const base = "http://127.0.0.1:8000";

      const email = event.target.elements.email.value;

      const url = `${base}/pubsub/api/subscription/create`;
      const data = {
        email: email,
        channel_slug: channelSlug,
      };

      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(data),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => {
          console.error("Error:", error);
        });

      close();
    });
}

export function close() {
  while (elements.length > 0) {
    elements.pop().remove();
  }
}
