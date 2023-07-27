// typing-effect.js
document.addEventListener("DOMContentLoaded", function() {
  var dataRotate = document.getElementById("txt-rotate").getAttribute("data-rotate");
  var periods = JSON.parse(dataRotate);
  var element = document.getElementById("txt-rotate");
  var toRotate = periods.slice(0);
  var period = parseInt(element.getAttribute("data-period"), 10);
  var loopNum = 0;
  var isDeleting = false;
  var txt = "";

  function tick() {
    var i = loopNum % toRotate.length;
    var fullTxt = toRotate[i];

    if (isDeleting) {
      txt = fullTxt.substring(0, txt.length - 1);
    } else {
      txt = fullTxt.substring(0, txt.length + 1);
    }

    element.innerHTML = '<span class="wrap">' + txt + "</span>";

    var delta = 200 - Math.random() * 100;

    if (isDeleting) {
      delta /= 2;
    }

    if (!isDeleting && txt === fullTxt) {
      delta = period;
      isDeleting = true;
    } else if (isDeleting && txt === "") {
      isDeleting = false;
      loopNum++;
      delta = 500;
    }

    setTimeout(tick, delta);
  }

  tick();
});