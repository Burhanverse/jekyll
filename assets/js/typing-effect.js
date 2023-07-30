// Typing Text
var element = document.getElementById("txt-rotate");
var toRotate = element.getAttribute("data-rotate");
var period = element.getAttribute("data-period");

setTimeout(function () {
  new TxtRotate(element, JSON.parse(toRotate), period);
}, 1500);

function TxtRotate(element, text, period) {
  var i = 0;
  var interval = setInterval(function () {
    if (i < text.length) {
      element.innerHTML += text[i];
      i++;
    } else {
      clearInterval(interval);
    }
  }, period);
}

// INJECT CSS
var css = document.createElement("style");
css.type = "text/css";
css.innerHTML = "#txt-rotate > .wrap { border-right: 0.08em solid #666 }";
document.body.appendChild(css);
