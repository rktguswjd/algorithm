const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  // N과M(5)
  // N개의 자연수 중에서 M개를 고른 수열
  // 수열은 사전 순으로 증가하는 순서로 출력

  const arr = input
    .shift()
    .split(" ")
    .map((n) => +n);
  n = arr[0];
  m = arr[1];

  const nArr = input
    .shift()
    .split(" ")
    .map((n) => +n)
    .sort((a, b) => a - b);

  const visitedArr = new Array(n).fill(false);

  backtraking(nArr, [], visitedArr);
  console.log(ans.join("\n"));
};
const ans = [];
const backtraking = (nArr, pickedArr, visitedArr) => {
  if (pickedArr.length == m) {
    ans.push(pickedArr.join(" "));
    return;
  }

  for (let i = 0; i < n; i++) {
    if (visitedArr[i]) continue;
    visitedArr[i] = true;
    pickedArr.push(nArr[i]);
    backtraking(nArr, pickedArr, visitedArr);
    pickedArr.pop();
    visitedArr[i] = false;
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
