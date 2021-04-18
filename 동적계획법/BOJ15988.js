const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const t = +input.shift();
  let dp = [];
  let ans = "";
  dp = new Array(1000000 + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  dp[2] = 2;
  for (let k = 3; k <= 1000000; k++) {
    dp[k] = (((dp[k - 3] + dp[k - 2]) % 1000000009) + dp[k - 1]) % 1000000009;
  }
  for (let i = 0; i < t; i++) {
    ans += dp[+input.shift()] + "\n";
  }
  console.log(ans);
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
