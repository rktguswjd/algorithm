const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let map = [];
const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
const dy = [0, 1, 1, 1, 0, -1, -1, -1];
const dfs = (y, x) => {
  if (y >= map.length || x >= map[0].length || y < 0 || x < 0) return;
  if (map[y][x] != 1) return;
  // 방문 처리
  map[y][x] = 0;
  // 주변 탐색
  for (let i = 0; i < 8; i++) {
    dfs(y + dy[i], x + dx[i]);
  }
};

const solution = (input) => {
  let answer = 0;
  while (true) {
    let arr = input.shift();
    let whArr = arr.split(" ");
    let w = +whArr[0];
    let h = +whArr[1];
    if (w === 0 && h == 0) {
      break;
    } else if (w === 1 && h === 1) {
      answer = +input.shift();
    } else {
      map = Array.from(Array(h), () => Array(w).fill(0));
      for (let i = 0; i < h; i++) {
        let splitArr = input.shift();
        let temp = splitArr.split(" ").map((n) => +n);
        map[i] = temp;
      }

      for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
          // 땅일때
          if (map[i][j] == 1) {
            dfs(i, j);
            answer++;
          }
        }
      }
    }
    console.log(answer);
    answer = 0;
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
