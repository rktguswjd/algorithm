const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let answerDfs = "";
let answerBfs = "";

const dfs = (arr, v, visitedDfs) => {
  // 현재 노드 방문 처리
  visitedDfs[v] = true;
  answerDfs += v + " ";
  for (let i = 0; i < arr[v].length; i++) {
    // 아직 방문하지 않은 원소 방문
    if (!visitedDfs[arr[v][i]]) {
      dfs(arr, arr[v][i], visitedDfs);
    }
  }
};

const queue = [];
const bfs = (arr, v, visitedBfs) => {
  // 현재 노드 방문 처리
  queue.push(v);
  visitedBfs[v] = true;
  // 큐가 빌 때까지 반복
  while (queue.length != 0) {
    // 큐에서 하나의 원소를 뽑아 출력
    let n = queue.shift();
    answerBfs += n + " ";
    for (let i = 0; i < arr[n].length; i++) {
      // 아직 방문하지 않은 인접한 원소들을 큐에 삽입
      if (visitedBfs[arr[n][i]]) continue;
      queue.push(arr[n][i]);
      visitedBfs[arr[n][i]] = true;
    }
  }
};

const solution = (input) => {
  const shiftArr = input.shift();
  const temp = shiftArr.split(" ").map((n) => +n);
  const N = temp[0];
  const M = temp[1];
  const V = temp[2];
  for (let i = 0; i < M; i++) {
    input[i] = input[i].split(" ").map((n) => +n);
  }

  const arr = Array.from(Array(N + 1), () => Array(0));
  for (let i = 0; i < M; i++) {
    let a = input[i][0];
    let b = input[i][1];
    arr[a].push(b);
    arr[b].push(a);
  }
  for (let e of arr) {
    e.sort((a, e) => a - e);
  }
  const visitedDfs = new Array(N + 1).fill(false);
  const visitedBfs = new Array(N + 1).fill(false);

  dfs(arr, V, visitedDfs);
  bfs(arr, V, visitedBfs);

  console.log(answerDfs);
  console.log(answerBfs);
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
