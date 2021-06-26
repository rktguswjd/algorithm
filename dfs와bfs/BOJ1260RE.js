const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let n = 0;
let m = 0;
let v = 0;
let list = [];
let dVisit = [];
let bVisit = [];
let res = "";
const solution = (input) => {
  const arr = input
    .shift()
    .split(" ")
    .map((n) => +n);
  n = arr[0]; // 정점 개수
  m = arr[1]; // 간선 개수
  v = arr[2]; // 시작 정점

  list = Array.from(Array(n + 1), () => Array(0)); // 인접 리스트
  dVisit = new Array(n + 1).fill(false); // dfs 방문 배열
  bVisit = new Array(n + 1).fill(false); // bfs 방문 배열
  for (let i = 0; i < m; i++) {
    const temp = input[i].split(" ");
    const a = +temp[0];
    const b = +temp[1];
    list[a].push(b);
    list[b].push(a);
  }

  // 정점 번호가 작은 것부터 ->  정렬
  for (let i = 0; i < list.length; i++) {
    list[i] = list[i].sort((a, b) => a - b);
  }

  // DFS, BFS 방문된 정점 순서 출력

  dfs(v);
  res += "\n";
  bfs(v);
  console.log(res);
};

const dfs = (v) => {
  dVisit[v] = true;
  res += v + " ";

  for (let i = 0; i < list[v].length; i++) {
    if (dVisit[list[v][i]]) continue;
    dfs(list[v][i]);
  }
};

const bfs = (v) => {
  const queue = [];
  bVisit[v] = true;
  res += v + " ";

  queue.push(v);

  while (queue.length != 0) {
    const nv = queue.shift();

    for (let i = 0; i < list[nv].length; i++) {
      if (bVisit[list[nv][i]]) continue;
      bVisit[list[nv][i]] = true;
      res += list[nv][i] + " ";
      queue.push(list[nv][i]);
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
