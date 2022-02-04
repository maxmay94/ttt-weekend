/*-------------------------------- Constants --------------------------------*/

const winStates = [3, 2, 3, 2, 4, 2, 3, 2, 3]

/*---------------------------- Variables (state) ----------------------------*/

let board, turn, winner

/*------------------------ Cached Element References ------------------------*/

const squares = document.querySelectorAll('.square')
const message = document.getElementById('message')
const gameBoard = document.querySelector('.board')
const resetBtn = document.querySelector("#reset-button")
console.log(squares)



/*----------------------------- Event Listeners -----------------------------*/

gameBoard.addEventListener('click', handleClick)
resetBtn.addEventListener('click', init)

/*-------------------------------- Functions --------------------------------*/
init()

function init() {
  message.textContent = ''
  sq0.textContent = ''
  sq1.textContent = ''
  sq2.textContent = ''
  sq3.textContent = ''
  sq4.textContent = ''
  sq5.textContent = ''
  sq6.textContent = ''
  sq7.textContent = ''
  sq8.textContent = ''

  resetBtn.setAttribute("hidden", true)

  board = [null, null, null, null, null, null, null, null, null]
  turn = 1
  winner = null

  //render()
}

function render() {
  for (let i = 0; i < board.length; i++) {
    if (board[i] === 1) {
      squares[i].textContent = 'X'
    } else if (board[i] === -1) {
      squares[i].textContent = 'O'
    }
  }
  checkWin()
}

function handleClick(evt) {
  if (evt.target.className === 'square') {
    let pick = parseInt(evt.target.id.charAt(2)) // get index of clicked square

    if (board[pick] === null) {
      if (turn === 1) board[pick] = 1
      else board[pick] = -1
      turn *= -1 // pass turn
    }
  } else {
    return
  }
  resetBtn.removeAttribute('hidden')

  render()
}

function checkWin() {

  
}