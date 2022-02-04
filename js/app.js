/*-------------------------------- Constants --------------------------------*/
const winStates = [
  [1,1,1,null,null,null,null,null,null],
  [null,null,null,1,1,1,null,null,null],
  [null,null,null,null,null,null,1,1,1],
  [1,null,null,1,null,null,1,null,null],
  [null,1,null,null,1,null,null,1,null],
  [null,null,1,null,null,1,null,null,1],
  [1,null,null,null,1,null,null,null,1],
  [null,null,1,null,1,null,1,null,null]
]

/*---------------------------- Variables (state) ----------------------------*/

let board, turn, winner

/*------------------------ Cached Element References ------------------------*/

const sq0 = document.getElementById('sq0')
const sq1 = document.getElementById('sq1')
const sq2 = document.getElementById('sq2')
const sq3 = document.getElementById('sq3')
const sq4 = document.getElementById('sq4')
const sq5 = document.getElementById('sq5')
const sq6 = document.getElementById('sq6')
const sq7 = document.getElementById('sq7')
const sq8 = document.getElementById('sq8')
const squares = document.querySelectorAll('.square')
const message = document.getElementById('message')


/*----------------------------- Event Listeners -----------------------------*/



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

  board = [null, null, null, null, null, null, null, null, null]
  turn = 1
  winner = null

  render()
  console.log(squares)
}

function render() {
  for(let i = 0; i <board.length; i++) {
    if(board[i] === 1) {
      squares[i].textContent = 'X'
    } else if(board[i] === -1) {
      squares[i].textContent = 'O'
    } 
  }
}
