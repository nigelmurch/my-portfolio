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

h1.addEventListener('click', () => {
  siren.currentTime = 0;
  siren.play();
  h1.classList.add('siren-active');
  setTimeout(() => h1.classList.remove('siren-active'), 2000); // remove after 2s
});
