const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let l;
const dy = [-2, -1, 1, 2, 2, 1, -1, -2];
const dx = [1, 2, 2, 1, -1, -2, -2, -1];
const solution = (input) => {
  // ㅣ*ㅣ 크기의 체스판
  // 나이트가 한 번에 이동할 수 있는칸
  // dy = [-1,-2,-2,-1,1,2,2,1]
  // dx = [-2,-1,1,2,2,1,-1,-2]

  // 나이트가 현재 있는 칸에서 이동하려고 하는 칸까지 최소 몇 번만에 이동할 수 있는지

  const n = +input.shift();
  let result = "";
  for (let i = 0; i < n; i++) {
    l = +input.shift();
    const [cy, cx] = input
      .shift()
      .split(" ")
      .map((n) => +n);
    const [y, x] = input
      .shift()
      .split(" ")
      .map((n) => +n);

    const chessboard = Array.from(Array(l), () => Array(l).fill(0));
    const visited = Array.from(Array(l), () => Array(l).fill(false));
    bfs(cy, cx, chessboard, visited);
    result += chessboard[y][x] + "\n";
  }
  console.log(result);
};

const bfs = (y, x, chessboard, visited) => {
  const queue = [];
  queue.push([y, x]);
  visited[y][x] = true;

  while (queue.length != 0) {
    const [cy, cx] = queue.shift();

    for (let i = 0; i < 8; i++) {
      let [ny, nx] = [cy + dy[i], cx + dx[i]];
      if (ny < 0 || nx < 0 || ny >= l || nx >= l) continue;
      if (chessboard[ny][nx] != 0 || visited[ny][nx]) continue;
      queue.push([ny, nx]);
      chessboard[ny][nx] = chessboard[cy][cx] + 1;
      visited[ny][nx] = true;
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
