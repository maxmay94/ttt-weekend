/*-------------------------------- Constants --------------------------------*/
// const winStates2 = [3, 2, 3, 2, 4, 2, 3, 2, 3]

const winStates = [
  [0, 1, 2],
  [3, 4, 5],  //Across
  [6, 7, 8],

  [0, 4, 8],
  [2, 4, 6],  // Diagonal

  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8]   // Down
]

// const winStates3 = [
//   [1, 1, 1, null, null, null, null, null, null],
//   [null, null, null, 1, 1, 1, null, null, null],
//   [null, null, null, null, null, null, 1, 1, 1],
//   [1, null, null, 1, null, null, 1, null, null],
//   [null, 1, null, null, 1, null, null, 1, null],
//   [null, null, 1, null, null, 1, null, null, 1],
//   [1, null, null, null, 1, null, null, null, 1],
//   [null, null, 1, null, 1, null, 1, null, null]
// ]

/*---------------------------- Variables (state) ----------------------------*/

let board, turn, winner

/*------------------------ Cached Element References ------------------------*/

const squares = document.querySelectorAll('.square')
const message = document.getElementById('message')
const gameBoard = document.querySelector('.board')
const resetBtn = document.querySelector("#reset-button")

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

  render()
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

  if (winner == null) {
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
}


function checkWin() {
  for (let i = 0; i < winStates.length; i++) { // go to each winState
    let add = 0
    for (let j = 0; j < winStates[i].length; j++) { 
      add += board[parseInt(winStates[i][j])] // see if board has values at each winState index, if it does add them
      if (Math.abs(add) === 3) { // if they add to 3 or -3 thats a win!
        message.textContent = `${(turn === 1) ? 'O' : 'X'} Wins!`
        winner = 'win'
        return
      }
    }
  }
  if(!board.includes(null)) {
   winner = 'tie'
   message.textContent = `It's a tie!`
  }
}