/*-------------------------------- Constants --------------------------------*/

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

  gameBoard.className = 'board animate__animated animate__pulse' 

  message.className = ''
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
  if(turn === 1) message.textContent = `It's player \u2206's turn`
  else message.textContent = `It's player \u2205's turn`

  for (let i = 0; i < board.length; i++) {
    if (board[i] === 1) {
      squares[i].textContent = '\u2206'
    } else if (board[i] === -1) {
      squares[i].textContent = '\u2205'
    }
  }
  checkWin()
}

function handleClick(evt) {

  gameBoard.className = 'board' // reset board so it will animate on restart

  if (winner == null) {
    if (evt.target.className === 'square') {
      // get index of clicked square
      let pick = parseInt(evt.target.id.charAt(2)) 
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
      // see if board has values at each winState index, if it does add them
      add += board[parseInt(winStates[i][j])] // see if board has values at each winState index, if it does add them
      // if they add to 3 or -3 thats a win!
      if (Math.abs(add) === 3) { 
        // 1 and -1 are backwards because turn changes in handleClick()
        message.textContent = `Player ${(turn === 1) ? '\u2205' : '\u2206'} wins!` 
        message.className = 'animate__animated animate__heartBeat'
        winner = 'win'
        confetti.start(3000)
        return
      }
    }
  }
  if(!board.includes(null)) {
   winner = 'tie'
   message.className = 'animate__animated animate__flash'
   message.textContent = `It's a tie!`
  }
}