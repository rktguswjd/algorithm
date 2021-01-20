const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let answer = "";
let result = 0;
// 상 하 좌 우
const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];
let map = [];
const solution = (input) => {
  const t = +input.shift();
  for (let i = 0; i < t; i++) {
    let arr = input.shift().split(" ");
    const m = +arr[0];
    const n = +arr[1];
    const k = +arr[2];
    map = Array.from(Array(n), () => Array(m).fill(0));
    for (let j = 0; j < k; j++) {
      let temp = input.shift().split(" ");
      let x = +temp[0];
      let y = +temp[1];
      map[y][x] = 1;
    }

    for (let h = 0; h < n; h++) {
      for (let w = 0; w < m; w++) {
        // 배추가 심어져 있는 땅일 때
        if (map[h][w] != 1) continue;
        dfs(h, w);
        result++;
      }
    }
    answer += result + "\n";
    result = 0;
  }
  console.log(answer);
};

const dfs = (y, x) => {
  // 지도 범위 벗어나면 리턴
  if (y >= map.length || x >= map[0].length || y < 0 || x < 0) return;
  // 방문했으면 리턴
  if (map[y][x] != 1) return;
  // 방문 처리
  map[y][x] = 0;
  // 주변 탐색
  for (let i = 0; i < 4; i++) {
    dfs(y + dy[i], x + dx[i]);
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
