const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 상 좌 하 우 왼쪽위대각선 오른쪽위대각선 왼쪽아래대각선 오른쪽아래대각선
const dy = [-1, 0, 1, 0, -1, -1, 1, 1];
const dx = [0, -1, 0, 1, -1, 1, -1, 1];

let w;
let h;

const solution = (input) => {
  // 섬과 바다 지도
  // 섬의 개수를 세는 프로그램
  // 상하좌우대각선으로 연결되어 있으면 걸어갈 수 있음

  while (true) {
    const arr = input.shift().split(" ");
    w = +arr[0];
    h = +arr[1];
    // 입력이 0 0이면 종료
    if (w == 0 && h == 0) break;

    // h개 줄까지 지도가 주어진다.
    // 1은 땅, 0은 바다
    const map = [];
    for (let i = 0; i < h; i++) {
      map.push(
        input
          .shift()
          .split(" ")
          .map((n) => +n)
      );
    }

    // 각 지도마다 섬의 개수를 출력
    let cnt = 0;
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        if (map[y][x] == 0) continue;
        dfs(y, x, map);
        cnt++;
      }
    }
    result += cnt + "\n";
  }
  console.log(result);
};
let result = "";

const dfs = (y, x, map) => {
  // 범위 검사
  if (y < 0 || x < 0 || y >= h || x >= w) return;
  // 섬 검사
  if (map[y][x] != 1) return;
  map[y][x] = 0;

  for (let i = 0; i < 8; i++) {
    dfs(y + dy[i], x + dx[i], map);
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
