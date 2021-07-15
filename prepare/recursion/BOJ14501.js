const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let n;
let t;
let p;
const solution = (input) => {
  n = +input.shift();
  t = new Array(n + 1).fill(0);
  p = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    const dayArr = input[i].split(" ").map((n) => +n);
    t[i + 1] = dayArr[0];
    p[i + 1] = dayArr[1];
  }

  getMaxProfit(1, 0);
  console.log(pay);
};
let pay = 0;
const getMaxProfit = (day, sum) => {
  if (day == n + 1) {
    if (pay < sum) pay = sum;
    return;
  }
  if (day > n + 1) return;

  getMaxProfit(day + 1, sum); // 상담을 하지않고 넘어가는경우
  getMaxProfit(day + t[day], sum + p[day]); // 상담을 하는 경우
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
