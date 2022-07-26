const board = document.getElementById("board");
const reboot = document.getElementById("reboot")
const change = document.getElementById("change");
const player1 = "❌";
const player2 = "⭕";
var turn = 0;
var finished = false;

reboot.addEventListener('click', (e)=>{
    window.location.reload();
    
})

board.addEventListener("click", (e) => {
  if (finished === false) {
    doChange(e);
    if (checkWinner(player1)) {
      change.innerText = `El ganador es ${player1}!`;
      finished = true;
    } else if (checkWinner(player2)) {
      change.innerText = `El ganador es ${player2}!`;
      finished = true;
    } else if (turn === 9) {
      change.innerText = "Es un empate :(";
      finished = true;
    }
  }
});

function doChange(e) {
  if (e.target.className === "box" && e.target.innerText === "") {
    if (turn % 2 === 0) {
      e.target.innerText = player1;
      change.innerText = `Turno de: ${player2}`;
    } else if (turn % 2 === 1) {
      e.target.innerText = player2;
      change.innerText = `Turno de: ${player1}`;
    }
    turn++;
  }
}

function winnerDiag(actualPlayer) {
  var result = false;

  if (
    board.children[0].innerText === actualPlayer &&
    board.children[4].innerText === actualPlayer &&
    board.children[8].innerText === actualPlayer
  ) {
    result = true;
  } else if (
    board.children[2].innerText === actualPlayer &&
    board.children[4].innerText === actualPlayer &&
    board.children[6].innerText === actualPlayer
  ) {
    result = true;
  }
  return result;
}

function winnerCol(actualPlayer) {
  var result = false;

  if (
    board.children[0].innerText === actualPlayer &&
    board.children[3].innerText === actualPlayer &&
    board.children[6].innerText === actualPlayer
  ) {
    result = true;
  } else if (
    board.children[1].innerText === actualPlayer &&
    board.children[4].innerText === actualPlayer &&
    board.children[7].innerText === actualPlayer
  ) {
    result = true;
  } else if (
    board.children[2].innerText === actualPlayer &&
    board.children[5].innerText === actualPlayer &&
    board.children[8].innerText === actualPlayer
  ) {
    result = true;
  }
  return result;
}

function winnerRow(actualPlayer) {
  var result = false;

  if (
    board.children[0].innerText === actualPlayer &&
    board.children[1].innerText === actualPlayer &&
    board.children[2].innerText === actualPlayer
  ) {
    result = true;
  } else if (
    board.children[3].innerText === actualPlayer &&
    board.children[4].innerText === actualPlayer &&
    board.children[5].innerText === actualPlayer
  ) {
    result = true;
  } else if (
    board.children[6].innerText === actualPlayer &&
    board.children[7].innerText === actualPlayer &&
    board.children[8].innerText === actualPlayer
  ) {
    result = true;
  }
  return result;
}

function checkWinner(player) {
  var winner = false;
  if (winnerDiag(player) || winnerCol(player) || winnerRow(player)) {
    winner = true;
  }
  return winner;
}
