const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let n;

const solution = (input) => {
  // BFS를 이용
  // 인접한 노드들로 내려가면서 순회하면 방문하는 시점의 노드와 인접한 노드들은 모두 방문 노드의 자식

  n = +input.shift();
  const list = Array.from(Array(n + 1), () => Array(0));
  for (let i = 0; i < input.length; i++) {
    const [a, b] = input[i].split(" ").map((n) => +n);
    list[a].push(b);
    list[b].push(a);
  }

  const visited = new Array(n + 1).fill(0);

  bfs(1, visited, list);
  let result = "";
  for (let i = 2; i <= n; i++) {
    result += visited[i] + "\n";
  }
  console.log(result);
};
const bfs = (v, visited, list) => {
  const queue = [];
  visited[v] = 1;
  queue.push(v);

  while (queue.length != 0) {
    let cur = queue.shift();

    for (let next of list[cur]) {
      if (visited[next] != 0) continue;
      visited[next] = cur;
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
