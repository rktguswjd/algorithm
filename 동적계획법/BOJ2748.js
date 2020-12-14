const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const dp = new Array(90).fill(0);
const fibo = (n) => {
  if (n == 1 || n == 2) return 1;
  if (dp[n] != 0) return dp[n];
  else dp[n] = fibo(n - 1) + fibo(n - 2);
  return dp[n];
};

const main = (rl) => {
  rl.on("line", (line) => {
    console.log(fibo(Number(line)));
  }).on("close", () => {
    process.exit();
  });
};

main(rl);
