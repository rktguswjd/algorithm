const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];
let map = [];
let n = 0;
let m = 0;
const solution = (input) => {
  const arr = input
    .shift()
    .split(" ")
    .map((n) => +n);
  n = arr[0];
  m = arr[1];

  for (let i = 0; i < input.length; i++) {
    map.push(input[i].split("").map((n) => +n));
  }
  // 최단거리
  bfs(0, 0);
  console.log(map[n - 1][m - 1]);
};

// 5 6
// 101010
// 111111
// 000001
// 111111
// 111111

const bfs = (y, x) => {
  const queue = [];
  queue.push([y, x]);

  // 큐가 빌 때까지
  while (queue.length !== 0) {
    // 큐에서 하나 뽑음
    const pop = queue.shift();
    let py = pop[0];
    let px = pop[1];

    // 해당 원소에서 상하좌우 확인
    for (let i = 0; i < 4; i++) {
      let ny = py + dy[i];
      let nx = px + dx[i];
      // 범위 확인
      if (ny < 0 || nx < 0 || ny >= n || nx >= m) continue;
      // 괴물 확인
      if (map[ny][nx] == 0) continue;
      // 방문 확인
      if (map[ny][nx] != 1) continue;

      // 방문 처리
      map[ny][nx] = map[py][px] + 1;

      // 큐 삽입
      queue.push([ny, nx]);
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
