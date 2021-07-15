const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let n;
let m;
const solution = (input) => {
  // 자연수 N과 M이 주어졌을 때, 아래 조건을 만족하는 길이가 M인 수열을 모두 구하는 프로그램을 작성하시오.
  // 1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열
  // 고른 수열은 오름차순이어야 한다.

  const inputArr = input
    .shift()
    .split(" ")
    .map((n) => +n);
  n = +inputArr[0];
  m = +inputArr[1];

  const nArr = new Array(n + 1).fill(0);
  //   const visit = new Array(n + 1).fill(false);
  for (let i = 1; i <= n; i++) {
    nArr[i] = i;
  }

  backtraking(nArr, [], 0);
  console.log([...set].join("\n"));
};
const set = new Set();
const backtraking = (nArr, pick, start) => {
  if (pick.length == m) {
    set.add(pick.join(" "));
    return;
  }

  for (let i = start + 1; i < nArr.length; i++) {
    pick.push(nArr[i]);
    backtraking(nArr, pick, i);
    pick.pop();
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
