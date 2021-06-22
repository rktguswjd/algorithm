// 이코테 예제 4-2
// 구현(완전탐색) - 시각
// 0 <= N <= 23

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const n = +input[0];
  // 00시 00분 00초부터 N시 59분 59초까지의 모든 시간 중 3이 하나라도 포함되는 모든 경우의 수
  let cnt = 0;
  for (let h = 0; h <= n; h++) {
    for (let m = 0; m < 60; m++) {
      for (let s = 0; s < 60; s++) {
        let time = String(h) + String(m) + String(s);
        if (time.indexOf("3") !== -1) {
          cnt++;
        }
      }
    }
  }

  console.log(cnt++);
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
