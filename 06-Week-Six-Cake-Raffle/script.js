// Access the form and relevant elements
const form = document.getElementById('entry-form');
const nameInput = document.getElementById('name');
const participantsList = document.getElementById('participants-list');
const drawButton = document.getElementById('draw-button');
const resetButton = document.getElementById('reset-button');
const winnerDisplay = document.getElementById('winner-display');

const participants = [];

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const name = nameInput.value;
  participants.push(name);

  participantsList.innerHTML += `<p>${name}</p>`;

  nameInput.value = '';
});
