function goToAboutPage() {
  window.location.href = "about.html"; // Navigate to About page
}

// Key press event
document.addEventListener('keydown', goToAboutPage);

// Mouse click on blinking text
document.querySelector('.blink').addEventListener('click', goToAboutPage);
