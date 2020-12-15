const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const dp = new Array(1001).fill(0);
const solution = (n) => {
  dp[1] = 1;
  dp[2] = 3;

  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + 2 * dp[i - 2]) % 10007;
  }

  console.log(dp[n]);
};

const main = (rl) => {
  rl.on("line", (line) => {
    solution(+line);
  }).on("close", () => {
    process.exit();
  });
};

main(rl);
