// Event Listener que será executado ao carregar o documento
document.addEventListener('DOMContentLoaded', () => {
  // seleciona todos os squares do documento
  let squares = document.querySelectorAll('.square');

  // varre o array de squares e em cada square do array vai o click será tratado através da função handleClick
  squares.forEach( (square) => {
    square.addEventListener('click', handleClick);
  });
});

function handleClick(event) {
  // a variável square recebe qual elemento foi clicado
  let square = event.target;
  // a variável position recebe o id do elemento clicado
  let position = square.id;

  if(handleMove(position)) {
    let winner;
    if(symbols[playerTime] === 'x') {
      winner = 'a Espada';
    } else {
      winner = 'o Escudo';
    }

    setTimeout( () => {
      alert(`Game Over! O vencedor foi ${winner}`);
    }, 10);

    resetGame();
  };
  
  updateSquare(position);
}

function updateSquare(position) {
  let square = document.getElementById(position.toString());
  let symbol = board[position];

  // adiciona uma div dentro do elemento que foi marcado com 'o' ou 'x' com a sua respectiva classe
  square.innerHTML = `<div class='${symbol}'></div>`;
}

function updateSquares() {
  // faz o update de todos os squares
  let squares = document.querySelectorAll('.square');

  // varre todos os squares
  squares.forEach( (square) => {
    square.innerHTML = '';
    // let position = square.id;
    // let symbol = board[position];

    // // verifica se o elemento atual contém 'o' ou 'x'
    // if(symbol !== '') {
    //   // adiciona uma div dentro do elemento que foi marcado com 'o' ou 'x' com a sua respectiva classe
    //   square.innerHTML = '';
    // }
  });
}

function resetGame() {
  let reset = document.querySelector('#reset');

  reset.addEventListener('click', () => {
    console.log(reset);

    board = ['', '', '', '', '', '', '', '', ''];
    playerTime = 0;
    gameOver = false;

    updateSquares()
  });
}