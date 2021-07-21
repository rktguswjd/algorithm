const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let n;
let m;
let v;
const solution = (input) => {
  // 그래프를 DFS로 탐색한 결과와 BFS로 탐색한 결과 출력
  // 단, 방문할 수 있는 정점이 여러 개인 경우 정점 번호가 작은 것을 먼저 방문
  // 더이상 방문할 수 있는 점이 없는 경우 종료
  // 출력 DFS 수행한 방문 순서, BFS 수행한 방문 순서
  const arr = input
    .shift()
    .split(" ")
    .map((n) => +n);
  n = arr[0]; // 정점 개수
  m = arr[1]; // 간선 개수
  v = arr[2]; // 시작할 정점 번호

  const adjaList = Array.from(Array(n + 1), () => Array(0));
  for (let i = 0; i < m; i++) {
    let edge = input[i].split(" ").map((n) => +n);
    adjaList[edge[0]].push(edge[1]);
    adjaList[edge[1]].push(edge[0]);
  }

  // 정점 번호가 작은 것을 먼저 방문하기 위해 정렬
  for (let i = 1; i < n + 1; i++) {
    adjaList[i] = adjaList[i].sort((a, b) => a - b);
  }

  const dVisit = new Array(n + 1).fill(false);
  const bVisit = new Array(n + 1).fill(false);

  dfs(v, adjaList, dVisit);
  result += "\n";
  bfs(v, adjaList, bVisit);

  console.log(result);
};
let result = "";

const dfs = (v, adjaList, dVisit) => {
  dVisit[v] = true;
  result += v + " ";

  for (let next of adjaList[v]) {
    if (dVisit[next]) continue;
    dfs(next, adjaList, dVisit);
  }
};

const bfs = (v, adjaList, bVisit) => {
  const queue = [];
  bVisit[v] = true;
  result += v + " ";

  queue.push(v);
  while (queue.length != 0) {
    let currV = queue.shift();

    for (let next of adjaList[currV]) {
      if (bVisit[next]) continue;
      bVisit[next] = true;
      result += next + " ";
      queue.push(next);
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
