function solution(board, moves) {
  const answer = [];
  let result = 0;
  for (let i = 0; i < moves.length; i++) {
    let pos = moves[i] - 1;
    for (let j = 0; j < board.length; j++) {
      if (board[j][pos] != 0) {
        answer.push(board[j][pos]);
        board[j][pos] = 0;
        if (answer.length >= 2) {
          if (answer[answer.length - 1] == answer[answer.length - 2]) {
            answer.pop();
            answer.pop();
            result += 2;
          }
        }
        break;
      }
    }
  }
  return result;
}

const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];

solution(board, moves);
