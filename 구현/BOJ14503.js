const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;
const solution = (input) => {
  let arr = input.shift().split(" ");
  const n = +arr[0];
  const m = +arr[1];

  arr = input
    .shift()
    .split(" ")
    .map((e) => +e);
  let r = arr[0]; // y
  let c = arr[1]; // x
  let nowDir = arr[2]; // 방향

  for (let i = 0; i < input.length; i++) {
    input[i] = input[i].split(" ").map((e) => +e);
  }

  while (true) {
    let clear = 0; // 네 방향 확인
    let back = false; // 뒤쪽 방향 벽 확인
    // 현재 위치를 청소한다.
    if (input[r][c] !== 7) {
      input[r][c] = 7;
      count++;
    }

    for (let i = 0; i < 4; i++) {
      // 현재 위치에서 현재 방향을 기준으로 왼쪽 방향부터 차례대로 탐색 진행
      if (nowDir === 0) {
        // 북
        if (input[r][c - 1] === 0) {
          nowDir = 3;
          r = r;
          c = c - 1;
          break;
        }
        nowDir = 3;
      } else if (nowDir === 1) {
        // 동
        if (input[r - 1][c] === 0) {
          nowDir = 0;
          r = r - 1;
          c = c;
          break;
        }
        nowDir = 0;
      } else if (nowDir === 2) {
        // 남
        if (input[r][c + 1] === 0) {
          nowDir = 1;
          r = r;
          c = c + 1;
          break;
        }
        nowDir = 1;
      } else if (nowDir === 3) {
        // 서
        if (input[r + 1][c] === 0) {
          nowDir = 2;
          r = r + 1;
          c = c;
          break;
        }
        nowDir = 2;
      }
      clear += 1;
    }

    if (clear === 4) {
      // 네 방향 모두 청소되있거나 벽
      switch (nowDir) {
        case 0: {
          if (input[r + 1][c] == 1) back = true;
          else {
            r = r + 1;
            c = c;
          }
          break;
        }
        case 1: {
          if (input[r][c - 1] == 1) back = true;
          else {
            r = r;
            c = c - 1;
          }
          break;
        }
        case 2: {
          if (input[r - 1][c] == 1) back = true;
          else {
            r = r - 1;
            c = c;
          }
          break;
        }
        case 3: {
          if (input[r][c + 1] == 1) back = true;
          else {
            r = r;
            c = c + 1;
          }
          break;
        }
      }
      if (back) {
        break;
      }
    }
  }

  console.log(count);
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
