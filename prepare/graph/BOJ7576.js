const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let n;
let m;
const queue = [];
const dy = [-1, 0, 1, 0];
const dx = [0, -1, 0, 1];
const solution = (input) => {
  // N*M 크기의 토마토
  // 하나의 토마토 인접한 곳(상하좌우)에 있는 익지않은 토마트들은 익은 토마토의 영향을 받아 익게 된다.

  // 1 => 익은 토마토
  // 0 => 익지 않은 토마토
  // -1 => 토마토가 들어있지 않은 칸

  // queue.shift()연산 때문에 시간초과
  // queue의 index로 접근해서 루프 돔

  const arr = input.shift().split(" ");
  n = +arr[0];
  m = +arr[1];

  const box = [];
  const visitedArr = Array.from(Array(m), () => Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    box.push(input[i].split(" ").map((n) => +n));
  }

  // 익은 토마토를 큐에 넣어주기
  // 큐에 넣고 방문처리!!
  for (let y = 0; y < m; y++) {
    for (let x = 0; x < n; x++) {
      if (box[y][x] != 1) continue;
      queue.push([y, x]);
      visitedArr[y][x] = 1;
    }
  }
  bfs(box, visitedArr);

  let flag = true;
  let ans = -99;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 토마토가 없는 곳
      if (box[i][j] == -1 && visitedArr[i][j] == 0) continue;
      // 토마토가 있지만 익지 않은 곳
      if (box[i][j] == 0 && visitedArr[i][j] == 0) {
        flag = false;
        break;
      }
      // 토마토가 전부다 익은 날 수 계산
      ans = Math.max(visitedArr[i][j], ans);
    }
  }

  if (flag) console.log(ans - 1);
  else console.log(-1);
};

const bfs = (box, visitedArr) => {
  let prevIdx = 0;

  while (true) {
    const curIdx = queue.length;

    let chagne = 0;
    for (let j = prevIdx; j < curIdx; j++) {
      // 원소뽑기
      const [y, x] = queue[j];

      // 뽑은 원소의 인접한 방향 탐색
      for (let i = 0; i < 4; i++) {
        let ny = y + dy[i];
        let nx = x + dx[i];
        // 박스 범위 검사
        if (ny < 0 || nx < 0 || ny >= m || nx >= n) continue;
        // 방문하지않았거나 토마토가 아닌지 검사
        if (box[ny][nx] == -1 || visitedArr[ny][nx] != 0) continue;
        chagne = 1;
        queue.push([ny, nx]);
        visitedArr[ny][nx] = visitedArr[y][x] + 1;
      }
    }
    if (!chagne) break;
    prevIdx = curIdx;
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
