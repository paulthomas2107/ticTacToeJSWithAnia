const gameBoard = document.querySelector('#gameboard');
const infoDisplay = document.querySelector('#info');
const startCells = ['', '', '', '', '', '', '', '', ''];

let go = 'circle';
infoDisplay.textContent = 'Circle goes first';

const createBoard = () => {
  startCells.forEach((cell, index) => {
    const cellElement = document.createElement('div');
    cellElement.classList.add('square');
    cellElement.id = index;
    cellElement.addEventListener('click', addGo);
    gameBoard.append(cellElement);
  });
};

const addGo = (e) => {
  const goDisplay = document.createElement('div');
  goDisplay.classList.add(go);
  e.target.append(goDisplay);
  go = go === 'circle' ? 'cross' : 'circle';
  infoDisplay.textContent = 'It is now ' + go + "'s go.";
  e.target.removeEventListener('click', addGo);
};

createBoard();
