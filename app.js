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
  checkScore();
};

const checkScore = () => {
  const allSqaures = document.querySelectorAll('.square');
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  winningCombos.forEach((array) => {
    const circleWins = array.every((cell) =>
      allSqaures[cell].firstChild?.classList.contains('circle')
    );
    if (circleWins) {
      infoDisplay.textContent = 'Circle Wins !';
      allSqaures.forEach((square) =>
        square.replaceWith(square.cloneNode(true))
      );
      return;
    }
  });

  winningCombos.forEach((array) => {
    const crosseWins = array.every((cell) =>
      allSqaures[cell].firstChild?.classList.contains('cross')
    );
    if (crosseWins) {
      infoDisplay.textContent = 'Cross Wins !';
      allSqaures.forEach((square) =>
        square.replaceWith(square.cloneNode(true))
      );
      return;
    }
  });
};

createBoard();
