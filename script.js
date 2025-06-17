function goToAboutPage() {
  window.location.href = "about.html"; // Redirect to About page
}

// Trigger on key press
document.addEventListener('keydown', goToAboutPage);

// Also trigger on mouse click of the text
document.querySelector('.blink').addEventListener('click', goToAboutPage);
