// 이코테 실전문제
// DFS\BFS - 음료수 얼려 먹기

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = 0;
let m = 0;
let map = [];
const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];

const solution = (input) => {
  const size = input
    .shift()
    .split(" ")
    .map((n) => +n);
  n = size[0];
  m = size[1];

  let cnt = 0;

  for (let i = 0; i < input.length; i++) {
    map.push(input[i].split("").map((n) => +n));
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (map[i][j] == 1) continue;
      dfs(i, j);
      cnt++;
    }
  }
  console.log(cnt);
};

// const dfs = (y, x) => {
//   console.log(y, x);

//   if (x < 0 || y < 0 || y >= n || x >= m) return;
//   if (map[y][x] == 1) return;

//   map[y][x] = 1;

//   for (let i = 0; i < 4; i++) {
//     dfs(y + dy[i], x + dx[i]);
//   }
// };

const dfs = (y, x) => {
  map[y][x] = 1;

  for (let i = 0; i < 4; i++) {
    let ny = y + dy[i];
    let nx = x + dx[i];
    if (ny < 0 || nx < 0 || ny >= n || nx >= m) continue;
    if (map[ny][nx] == 1) continue;
    dfs(ny, nx);
  }
};

// 15 14
// 00000111100000
// 11111101111110
// 11011101101110
// 11011101100000
// 11011111111111
// 11011111111100
// 11000000011111
// 01111111111111
// 00000000011111
// 01111111111000
// 00011111111000
// 00000001111000
// 11111111110011
// 11100011111111
// 11100011111111

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
