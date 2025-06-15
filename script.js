
window.onload = function () {
  const bootText2 = document.querySelector('.boot-text2');
  const anyKey = document.querySelector('.any-key');

  const originalText = bootText2.innerHTML;
  bootText2.innerHTML = '';
  let index = 0;

  function typeText() {
    if (index < originalText.length) {
      bootText2.innerHTML += originalText.charAt(index);
      index++;
      setTimeout(typeText, 40);
    } else {
      anyKey.style.display = 'block';

      // Redirect on any key press
      document.addEventListener('keydown', () => {
        window.location.href = 'about.html';
      });
    }
  }

  typeText();
};
