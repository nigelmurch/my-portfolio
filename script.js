const bootTextElement = document.getElementById('bootText');
const anyKeyElement = document.getElementById('anyKey');

const bootLines = [
  " **** COMMODORE 64 BASIC V2 ****",
  " 64K RAM SYSTEM 38911 BASIC BYTES FREE",
  "READY.",
];

let lineIndex = 0;
let charIndex = 0;

function typeLine() {
  if (lineIndex < bootLines.length) {
    const line = bootLines[lineIndex];
    if (charIndex <= line.length) {
      bootTextElement.textContent += line.charAt(charIndex);
      charIndex++;
      setTimeout(typeLine, 50); // Typing speed
    } else {
      bootTextElement.textContent += '\n';
      lineIndex++;
      charIndex = 0;
      setTimeout(typeLine, 300); // Delay between lines
    }
  } else {
    // Finished typing
    setTimeout(() => {
      anyKeyElement.style.display = 'block';
    }, 500);
  }
}

document.addEventListener('keydown', () => {
  window.location.href = '/home'; // Change this to your actual homepage URL
});

document.addEventListener('click', () => {
  window.location.href = '/home'; // Allow click anywhere
});

typeLine();