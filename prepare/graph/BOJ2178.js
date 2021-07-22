const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let n;
let m;
const solution = (input) => {
  // N*M 크기의 미로
  // 1은 이동할 수 있는 칸, 0은 이동할 수 없는 칸
  // (1,1)에서 출발하여 (N,M)의 위치로 이동할 때 지나야하는 최소 칸 수
  // 서로 인접한 칸만 이동 가능

  const arr = input.shift().split(" ");
  n = +arr[0];
  m = +arr[1];

  const map = [];
  const visitedArr = Array.from(Array(n), () => Array(m).fill(0));
  for (let i = 0; i < n; i++) {
    map.push(input[i].split("").map((n) => +n));
  }
  bfs(0, 0, map, visitedArr);
  console.log(visitedArr[n - 1][m - 1]);
};

// 상 하 좌 우
const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

const bfs = (y, x, map, visitedArr) => {
  const queue = [];

  // 방문처리
  visitedArr[y][x] = 1;
  queue.push([y, x]);

  // 큐가빌때까지 탐색
  while (queue.length != 0) {
    // 뽑기
    const arr = queue.shift();
    let cy = arr[0];
    let cx = arr[1];

    // 갈곳탐색
    for (let i = 0; i < 4; i++) {
      let ny = cy + dy[i];
      let nx = cx + dx[i];

      // 범위검사
      if (ny < 0 || nx < 0 || ny >= n || nx >= m) continue;
      // 길이없거나(0) 방문했는지 검사
      if (map[ny][nx] != 1 || visitedArr[ny][nx] != 0) continue;
      queue.push([ny, nx]);
      visitedArr[ny][nx] = visitedArr[cy][cx] + 1;
    }
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
