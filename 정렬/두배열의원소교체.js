const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 5 3
// 1 2 5 4 3
// 5 5 6 6 5

const solution = (input) => {
  const temp = input
    .shift()
    .split(" ")
    .map((n) => +n);
  const n = temp[0];
  const k = temp[1];

  const numArr = [];
  for (let i = 0; i < input.length; i++) {
    numArr.push(input[i].split(" ").map((n) => +n));
  }

  numArr[0].sort((a, b) => a - b);
  numArr[1].sort((a, b) => b - a);

  for (let c = 0; c < k; c++) {
    let temp = numArr[0][c];
    numArr[0][c] = numArr[1][c];
    numArr[1][c] = temp;
  }

  console.log(
    numArr[0].reduce((sum, e) => {
      return sum + e;
    }, 0)
  );
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
