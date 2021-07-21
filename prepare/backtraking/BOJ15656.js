const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  // N과M(7)
  // N개의 자연수 중에서 M개를 고른 수열
  // 같은 수를 여러 번 골라도 된다.
  // 수열은 사전 순으로 증가하는 순서로 출력해야 한다.

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

  backtraking(nArr, []);
  console.log(ans.join("\n"));
};
const ans = [];
const backtraking = (nArr, pickedArr) => {
  if (pickedArr.length == m) {
    ans.push(pickedArr.join(" "));
    return;
  }

  for (let i = 0; i < n; i++) {
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
