const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  // 1부터 N까지 자연수 중에서 M개를 고른 수열
  // 같은 수를 여러 번 골라도 된다.
  // 고른 수열은 비내림차순이어야 한다.
  // 길이가 K인 수열 A가 A1 ≤ A2 ≤ ... ≤ AK-1 ≤ AK를 만족하면, 비내림차순이라고 한다

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

  backtraking(nArr, [], 1);
  console.log(ans.join("\n"));
};
const ans = [];
const backtraking = (nArr, pickedArr, start) => {
  if (pickedArr.length == m) {
    ans.push(pickedArr.join(" "));
    return;
  }

  for (let i = start; i <= n; i++) {
    pickedArr.push(nArr[i]);
    backtraking(nArr, pickedArr, i);
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
