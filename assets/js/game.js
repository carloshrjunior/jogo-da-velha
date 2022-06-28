// iniciar variáveis
let board = ['', '', '', '', '', '', '', '', ''];
let playerTime = 0;
let gameOver = false;

let symbols = ['o', 'x'];

// array com as posições vencedoras
let winStates = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function handleMove(position) {
  if(gameOver) {
    return;
  }
  
  // garante que a posição atual do array estaja vazia
  if(board[position] == '') {
    // atribui o simbolo do jogador da vez no array de posições do tabuleiro na posição passada como argumento da função handleMove
    board[position] = symbols[playerTime];

    gameOver = isWin();

    if(gameOver == false) {
      // muda a vez do jogador depois da jogada do jogador atual
      playerTime = (playerTime == 0) ? 1 : 0;
    }
  }

  return gameOver;
}

function isWin() {
  for(let i = 0; i < winStates.length; i++) {
    let seq = winStates[i];

    let pos1 = seq[0];
    let pos2 = seq[1];
    let pos3 = seq[2];

    if(board[pos1] == board[pos2] &&
       board[pos1] == board[pos3] &&
       board[pos1] != '') {
        return true;
    }
  }

  return false;
}