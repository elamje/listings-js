(function () {
  // Create a new div element
  var widgetDiv = document.createElement("div");
  widgetDiv.id = "myWidget";
  widgetDiv.textContent = "Hello, I'm your new widget!";

  // Append the div to the body
  document.body.appendChild(widgetDiv);

  // Add some styles to our widget
  var css = "#myWidget { font-size: 20px; color: red; }",
    head = document.head || document.getElementsByTagName("head")[0],
    style = document.createElement("style");

  head.appendChild(style);
  style.type = "text/css";
  if (style.styleSheet) {
    // This is required for IE8 and below.
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
})();
