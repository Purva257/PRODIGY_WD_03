let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];

function makeMove(index) {
    if (board[index] === '') {
        board[index] = currentPlayer;
        document.getElementsByClassName('cell')[index].innerText = currentPlayer;
        
        if (checkWinner()) {
            alert(`Player ${currentPlayer} wins!`);
            resetGame();
        } else if (board.every(cell => cell !== '')) {
            alert('It\'s a draw!');
            resetGame();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6]             // diagonals
    ];

    return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return board[a] !== '' && board[a] === board[b] && board[b] === board[c];
    });
}

function resetGame() {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    document.querySelectorAll('.cell').forEach(cell => cell.innerText = '');
}
