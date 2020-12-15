const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const T = +input.shift();
  for (let t = 0; t < T; t++) {
    let arr = Array.from(Array(30), () => Array(30).fill(0));
    let testCase = input[t].split(" ");
    let N = testCase[0];
    let M = testCase[1];
    for (let i = 0; i <= M; i++) arr[1][i] = i;
    for (let i = 2; i <= N; i++) {
      for (let j = i; j <= M; j++) {
        for (let k = j; k >= i; k--) {
          arr[i][j] += arr[i - 1][k - 1];
        }
      }
    }
    console.log(arr[N][M]);
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
