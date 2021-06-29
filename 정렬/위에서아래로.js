const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// N의 범위: 1 <= N <= 500
// 수의 범위: 1 이상 100,000

// 내림차순
// 3
// 15
// 27
// 12
const solution = (input) => {
  const n = +input.shift();
  const arr = [];

  for (let i = 0; i < n; i++) {
    arr.push(+input[i]);
  }

  // 어떠한 정렬 알고리즘을 사용해도 무관
  // 가장 코드가 간결해지는 정렬 라이브러리를 이용

  arr.sort((a, b) => b - a);
  console.log(arr.join(" "));
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
