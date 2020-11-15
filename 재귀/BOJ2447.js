const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (n) => {
  const arr = new Array(n).fill(null).map(() => new Array(n).fill(" "));
  recursion(arr, n, 0, 0);
  let result = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      result += arr[i][j];
    }
    result += "\n";
  }
  console.log(result);
};
const recursion = (arr, length, x, y) => {
  if (length == 3) {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (i == 1 && j == 1) arr[x + i][y + j] = " ";
        else arr[x + i][y + j] = "*";
      }
    }
    return;
  }
  let nowLength = length / 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (i == 1 && j == 1) continue;
      recursion(arr, nowLength, x + nowLength * i, y + nowLength * j);
    }
  }
};

const main = (rl) => {
  rl.on("line", (line) => {
    solution(Number(line));
  }).on("close", () => {
    process.exit();
  });
};

main(rl);
