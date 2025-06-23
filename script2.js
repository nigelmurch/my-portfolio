const modal = document.getElementById('modal-overlay');
const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.getElementById('closeModal');

openModalBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

window.addEventListener('load', () => {
  siren.play().catch(() => {
    // Autoplay blocked — you can show a prompt or play on interaction
  });
});
