
const screen = document.getElementById('screen');
const pressKey = document.getElementById('pressKey');
const typeSound = document.getElementById('typeSound');

const text = `**** COMMODORE 64 BASIC V2 ****  
64K RAM SYSTEM  38911 BASIC BYTES FREE

VM INVESTIGATION READY.

LOAD "PROFILE01",8,1  
SEARCHING FOR PORTFOLIO  
LOADING  
READY.
`;

let index = 0;

function typeText() {
  if (index < text.length) {
    screen.textContent += text[index];
    if (text[index] !== ' ' && text[index] !== '\n') {
      typeSound.currentTime = 0;
      typeSound.play();
    }
    index++;
    setTimeout(typeText, 50); // typing speed
  } else {
    pressKey.style.visibility = 'visible';
  }
}

document.addEventListener('DOMContentLoaded', typeText);

document.addEventListener('keydown', () => {
  alert("Continuing...");
});
