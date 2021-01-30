const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let m = 0;
let k = 0;
let arr = Array.from(Array(2501), () => Array(51).fill(0));

const solution = (input) => {
  m = +input.shift();
  const shingle = input
    .shift()
    .split(" ")
    .map((e) => +e);
  k = +input.shift();
  //전체 조약돌의 수
  let entry = shingle.reduce((a, e) => a + e, 0);
  let ans = shingle
    .filter((e) => {
      if (e >= k) return true;
      else return false;
    })
    .reduce((a, e) => a + combination(e, k), 0);

  entry = combination(entry, k);
  let answer = ans / entry;
  if (answer == 1 || answer == 0) console.log(answer.toFixed(1));
  else console.log(answer);
};
const combination = (n, k) => {
  if (k == 0 || n == k || n == 1) {
    return 1;
  }
  if (arr[n][k] != 0) return arr[n][k];
  return (arr[n][k] = combination(n - 1, k - 1) + combination(n - 1, k));
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
