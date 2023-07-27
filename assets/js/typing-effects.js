document.addEventListener("DOMContentLoaded", function () {
  var dataRotate = document.querySelector(".typing-text").getAttribute("data-rotate");
  var periods = JSON.parse(dataRotate);
  var element = document.querySelector(".typing-text");
  var toRotate = periods.slice(0);
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

    element.textContent = txt;

    var delta = 200 - Math.random() * 100;

    if (isDeleting) {
      delta /= 2;
    }

    if (!isDeleting && txt === fullTxt) {
      delta = 2000; // Pause at the end of typing
      isDeleting = true;
    } else if (isDeleting && txt === "") {
      isDeleting = false;
      loopNum++;
      delta = 500; // Pause before starting to type again
    }

    setTimeout(tick, delta);
  }

  tick();
});