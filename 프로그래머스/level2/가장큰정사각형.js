function solution(board) {
  let ans = 0;
  const map = Array.from(Array(board.length + 1), () =>
    Array(board[0].length + 1).fill(0)
  );
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      map[i + 1][j + 1] = board[i][j];
    }
  }

  for (let i = 1; i <= board.length; i++) {
    for (let j = 1; j <= board[0].length; j++) {
      if (map[i][j] != 0) {
        map[i][j] =
          Math.min(map[i][j - 1], map[i - 1][j], map[i - 1][j - 1]) + 1;
        ans = Math.max(ans, map[i][j]);
      }
    }
  }

  console.log(ans * ans);
}

const board = [
  [0, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [0, 0, 1, 0],
];
solution(board);
