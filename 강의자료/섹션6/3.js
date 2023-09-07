function solution(board, moves) {
  let count = 0;
  let move_index = moves.map((element) => element - 1);
  let box = [];
  for (let x of move_index) {
    for (let i = 0; i < board.length; i++) {
      if (board[i][x] === 0) {
        continue;
      } else {
        box.push(board[i][x]);
        isBomb();
        board[i][x] = 0;
        break;
      }
    }
  }

  function isBomb() {
    while (box.length > 1) {
      if (box[box.length - 1] === box[box.length - 2]) {
        box.pop();
        box.pop();
        count += 2;
      } else {
        break;
      }
    }
  }
  return count;
}

let a = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

let b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));
