const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// 4 6
// 19 15 10 17

// 파라메트릭 서치
// 최적화 문제를 결정 문제로 바꾸어 해결하는 기법

const solution = (input) => {
  const temp = input[0].split(" ").map((n) => +n);
  const n = temp[0];
  const m = temp[1];

  const arr = input[1].split(" ").map((n) => +n);
  let result = 0;
  let start = 0;
  let end = Math.max.apply(null, arr);

  while (start <= end) {
    let sum = 0;
    let mid = Math.floor((start + end) / 2);

    for (let i = 0; i < n; i++) {
      if (mid >= arr[i]) continue;
      sum += arr[i] - mid;
    }

    if (sum < m) end = mid - 1;
    else {
      result = mid;
      start = mid + 1;
    }
  }
  console.log(result);
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
