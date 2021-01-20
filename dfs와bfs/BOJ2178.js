const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = 0;
let m = 0;
// 상 하 좌 우
const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];
const queue = [];
// 미로배열
let map = [];
// 방문배열
let visited = [];

const bfs = (y, x) => {
  // 방문 처리
  visited[y][x] = 1;
  queue.push([y, x]);

  while (queue.length != 0) {
    // 원소 뽑기
    let arr = queue.shift();
    let queY = arr[0];
    let queX = arr[1];

    // 주변 탐색
    for (let i = 0; i < 4; i++) {
      let nextY = queY + dy[i];
      let nextX = queX + dx[i];
      // 배열 범위를 벗어나면 컨티뉴
      if (nextX >= m || nextY >= n || nextX < 0 || nextY < 0) continue;
      // 길이 없고, 방문했으면 컨티뉴
      if (map[nextY][nextX] != 1 || visited[nextY][nextX] != 0) continue;
      queue.push([nextY, nextX]);
      visited[nextY][nextX] = visited[queY][queX] + 1;
    }
  }
};

const solution = (input) => {
  const arr = input.shift().split(" ");
  n = +arr[0];
  m = +arr[1];
  map = Array.from(Array(n), () => Array(m).fill(0));
  visited = Array.from(Array(n), () => Array(m).fill(0));
  for (let i = 0; i < n; i++) {
    let temp = input[i].split("").map((e) => +e);
    map[i] = temp;
  }
  bfs(0, 0);
  console.log(visited[n - 1][m - 1]);
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
