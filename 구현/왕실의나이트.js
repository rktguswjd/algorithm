// 이코테 실전문제
// 구현 - 왕실의 나이트

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = 0;
const solution = (input) => {
  // 나이트는 특정한 위치에서 2가지 경우로 이동
  // 1. 수평으로 두 칸 이동한 뒤에 수직으로 한 칸 이동하기
  // 2. 수직으로 투 칸 이동한 뒤에 수평으로 한 칸 이동하기
  // y,x
  // -2,-1 \ -2,1 \ 2,-1 \ 2,1 \ -1,-2 \ 1,-2 \ -1,2 \ 1,2
  const temp = input.shift().split("");
  let nowY = +temp[1] - 1;
  let nowX = temp[0].charCodeAt() - 97;

  let y = [-2, -2, 2, 2, -1, 1, -1, 1];
  let x = [-1, 1, -1, 1, -2, -2, 2, 2];
  let cnt = 0;

  for (let i = 0; i < 8; i++) {
    let nextY = nowY + y[i];
    let nextX = nowX + x[i];

    if (nextX < 0 || nextY < 0 || nextX > 8 || nextY > 8) continue;
    cnt++;
  }

  console.log(cnt);
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
