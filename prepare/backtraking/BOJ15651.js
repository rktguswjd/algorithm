const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let n;
let m;
const solution = (input) => {
  // 자연수 N과 M이 주어졌을 때, 아래 조건을 만족하는 길이가 M인 수열을 모두 구하는 프로그램을 작성하시오.
  // 1부터 N까지 자연수 중에서 M개를 고른 수열
  // 같은 수를 여러 번 골라도 된다.

  const arr = input
    .shift()
    .split(" ")
    .map((n) => +n);
  n = arr[0];
  m = arr[1];

  const nArr = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    nArr[i] = i;
  }

  backtraking(nArr, []);
  console.log(ans.join("\n"));
};
const ans = [];
const backtraking = (nArr, pickedArr) => {
  if (pickedArr.length == m) {
    ans.push(pickedArr.join(" "));
    return;
  }

  for (let i = 1; i <= n; i++) {
    pickedArr.push(nArr[i]);
    backtraking(nArr, pickedArr);
    pickedArr.pop();
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
