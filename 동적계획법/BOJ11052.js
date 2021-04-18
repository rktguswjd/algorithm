const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const n = +input.shift();
  const card = input
    .shift()
    .split(" ")
    .map((n) => +n);

  const dp = new Array(n + 1).fill(0);
  dp[0] = 0;

  for (let k = 1; k <= n; k++) {
    for (let t = 1; t <= k; t++) {
      dp[k] = Math.max(dp[k - t] + card[t - 1], dp[k]);
    }
  }
  console.log(dp[n]);
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
