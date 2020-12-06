const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let count = 0;
const callNumber = (board, num) => {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (board[i][j] == num) {
        board[i][j] = 0;
        if (isBingo(board, j, i)) return true;
        return false;
      }
    }
  }
};

const isBingo = (board, x, y) => {
  let insertY = y;
  let insertX = x;
  //행을 검사
  let checkCol = true;
  for (let i = 0; i < 5; i++) {
    if (board[insertY][i] != 0) {
      checkCol = false;
      break;
    }
  }
  if (checkCol) {
    count++;
  }

  //열을 검사
  let checkRow = true;
  for (let i = 0; i < 5; i++) {
    if (board[i][insertX] != 0) {
      checkRow = false;
      break;
    }
  }
  if (checkRow) {
    count++;
  }
  //오른쪽 대각선 검사
  if (insertX + insertY == 4) {
    let checkRight = true;

    for (let i = 0; i < 5; i++) {
      if (board[i][4 - i] != 0) {
        checkRight = false;
        break;
      }
    }

    if (checkRight) {
      count++;
    }
  }

  //왼쪽 대각선 검사
  if (insertX == insertY) {
    let checkLeft = true;

    for (let i = 0; i < 5; i++) {
      if (board[i][i] != 0) {
        checkLeft = false;
        break;
      }
    }

    if (checkLeft) {
      count++;
    }
  }
  if (count >= 3) {
    return true;
  } else return false;
};

const solution = (input) => {
  const board = input.splice(0, 5);
  const moderator = [];
  for (let i = 0; i < 5; i++) {
    board[i] = board[i].split(" ").map((num) => +num);
    input[i] = input[i].split(" ").map((num) => +num);
  }
  for (let e of input) {
    moderator.push(...e);
  }

  for (let i = 0; i < 25; i++) {
    let num = moderator[i];
    if (callNumber(board, num)) {
      console.log(i + 1);
      break;
    }
  }
};
const input = [];
const main = (rl) => {
  rl.on("line", (line) => {
    input.push(line);
  }).on("close", () => {
    solution(input);
    process.exit();
  });
};

main(rl);
