document.addEventListener("DOMContentLoaded", function () {
  const typingTextElement = document.querySelector(".typing-text");
  const texts = JSON.parse(typingTextElement.getAttribute("data-rotate"));
  const initialDelay = 1000; // Delay before starting to type
  const typeSpeed = 150; // Speed of typing (lower value means faster typing)
  const deleteSpeed = 50; // Speed of deleting (lower value means faster deleting)
  const pauseBetweenTexts = 2000; // Pause between texts

  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentText = texts[textIndex];
    const typedText = currentText.substring(0, charIndex);
    typingTextElement.textContent = typedText;

    if (isDeleting) {
      charIndex--;
    } else {
      charIndex++;
    }

    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
    } else if (!isDeleting && charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(type, pauseBetweenTexts);
      return;
    }

    const speed = isDeleting ? deleteSpeed : typeSpeed;
    setTimeout(type, speed);
  }

  setTimeout(type, initialDelay);
});