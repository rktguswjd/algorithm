const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let n;
let m;
const solution = (input) => {
  // 정수 n이 주어졌을 때, n을 1,2,3의 합으로 나타내는 방법의수
  // n=1 : 1
  // n=2 : 2
  // n=3 : 4
  // n=4 : 7
  const n = +input.shift();
  let result = "";
  for (let i = 0; i < n; i++) {
    result += recursion(+input[i]) + "\n";
  }
  console.log(result);
};

const recursion = (n) => {
  if (n == 1) return 1;
  if (n == 2) return 2;
  if (n == 3) return 4;
  return recursion(n - 1) + recursion(n - 2) + recursion(n - 3);
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
