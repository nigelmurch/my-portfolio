const bootTextElement = document.getElementById('bootText');
const anyKeyElement = document.getElementById('anyKey');

const bootLines = [
  "**** COMMODORE 64 BASIC V2 ****",
  "64K RAM SYSTEM  38911 BASIC BYTES FREE",
  "",
  "UX INVESTIGATOR READY.",
  "",
  "LOAD \"PORTFOLIO\",8,1",
  "SEARCHING FOR PORTFOLIO",
  "LOADING",
  "READY."
];

const typingSound = new Audio("older-keyboard-typing.wav");
typingSound.loop = true;
typingSound.volume = 0.2;

let lineIndex = 0;
let charIndex = 0;
let typingFinished = false;

function typeLine() {
  if (lineIndex === 0 && charIndex === 0) {
    // Try to start sound when typing begins
    typingSound.play().catch(() => {});
  }

  if (lineIndex < bootLines.length) {
    const line = bootLines[lineIndex];
    if (charIndex <= line.length) {
      bootTextElement.textContent += line.charAt(charIndex);
      charIndex++;
      setTimeout(typeLine, 50); // typing speed
    } else {
      bootTextElement.textContent += '\n';
      lineIndex++;
      charIndex = 0;
      setTimeout(typeLine, 300); // delay between lines
    }
  } else {
    // Typing finished
    typingSound.pause();
    typingSound.currentTime = 0;
    typingFinished = true;
    setTimeout(() => {
      anyKeyElement.style.display = 'block';
    }, 500);
  }
}

// Fallback: user interaction starts sound if blocked
document.body.addEventListener("click", () => {
  if (typingSound.paused) {
    typingSound.play().catch(() => {});
  }
});

document.addEventListener('click', () => {
  if (typingFinished) {
    window.location.href = '/about'; // Update to your actual path
  }
});

document.addEventListener('keydown', () => {
  if (typingFinished) {
    window.location.href = '/about';
  }
});

// Start typing on load
window.onload = typeLine;
