const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let n;
const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

const solution = (input) => {
  n = input.shift();

  // 단지번호 붙이기
  // 정사각형 모양 N*N
  // 1 => 집이 있는곳
  // 0 => 잡이 없는곳
  // 연결된 집의 모임인 단지를 정한다
  // 연결되었다는 것은 상하좌우만
  // 출력 : 총 단지수, 각 단지내 집 수
  const map = [];
  for (let i = 0; i < n; i++) {
    map.push(input[i].split("").map((n) => +n));
  }

  const ans = [];
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      if (map[y][x] != 1) continue;
      dfs(y, x, map);
      ans.push(cnt);
      cnt = 0;
    }
  }

  ans.sort((a, b) => a - b);
  console.log(ans.length + "\n" + ans.join("\n"));
};

let cnt = 0;
const dfs = (y, x, map) => {
  if (y < 0 || x < 0 || y >= n || x >= n) return;
  if (map[y][x] != 1) return;
  map[y][x] = 0;
  cnt++;

  for (let i = 0; i < 4; i++) {
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
