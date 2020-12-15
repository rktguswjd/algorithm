const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const N = +input.shift();
  const arr = [];
  for (let i = 0; i < N; i++) {
    input[i] = input[i].split("");
    input[i].push("X");
  }
  for (let i = 0; i < N + 1; i++) arr.push("X");
  input.push(arr);

  let countX = 0;
  let countY = 0;
  for (let j = 0; j < N; j++) {
    for (let i = 0; i < N - 1; i++) {
      countX +=
        input[j][i] === "." &&
        input[j][i + 1] === "." &&
        input[j][i + 2] === "X"
          ? 1
          : 0;
      countY +=
        input[i][j] === "." &&
        input[i + 1][j] === "." &&
        input[i + 2][j] === "X"
          ? 1
          : 0;
    }
  }

  console.log(countX, countY);
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
