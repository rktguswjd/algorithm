const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  // 정수 N이 주어졌을 때 아래와 같은 연산 세개를 사용하여 1로 만들때, 연산 최소 횟수
  // 1. N이 3으로 나누어 떨어지면, 3으로 나눈다
  // 2. N이 2로 나누어 떨어지면, 2로 나눈다.
  // 3. 1을 뺀다.
  // N=1 -> 0
  // N=2 -> 1
  // N=3 -> 1
  // N=4 -> 2
  // N=5 -> 3
  // N=6 -> 2
  // N=7 -> 3
  // N=8 -> 3
  // N=9 -> 2
  // N=10 -> 3
  const n = +input.shift();

  const dp = new Array(1000001).fill(0);
  dp[1] = 0;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + 1;
    if (i % 2 == 0) dp[i] = Math.min(dp[i], dp[i / 2] + 1);
    if (i % 3 == 0) dp[i] = Math.min(dp[i], dp[i / 3] + 1);
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
