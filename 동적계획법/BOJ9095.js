const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const dp = new Array(12).fill(0);
const solution = (input) => {
  const T = input.shift();
  let result = "";
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 4;
  //base case
  for (let i = 4; i <= 11; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }

  for (let i = 0; i < T; i++) {
    console.log(dp[input[i]]);
  }
};

const input = [];
const main = (rl) => {
  rl.on("line", (line) => {
    input.push(Number(line));
  }).on("close", () => {
    solution(input);
    process.exit();
  });
};

main(rl);
