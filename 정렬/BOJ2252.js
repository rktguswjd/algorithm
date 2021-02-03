const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let n = 0;
let m = 0;
const solution = (input) => {
  const arr = input
    .shift()
    .split(" ")
    .map((e) => +e);
  n = arr[0]; // 노드 개수
  m = arr[1]; // 비교한 횟수
  for (let i = 0; i < m; i++) {
    input[i] = input[i].split(" ").map((e) => +e);
  }

  // 진입 차수 배열
  const degreeArr = new Array(n + 1).fill(0);
  for (let i = 0; i < m; i++) {
    let temp = input[i];
    let node = temp[1];
    degreeArr[node] += 1;
  }

  // 인접 리스트
  const list = Array.from(Array(n + 1), () => Array(0));
  for (let i = 0; i < m; i++) {
    let temp = input[i];
    list[temp[0]].push(temp[1]);
    list[temp[1]].push(temp[0]);
  }
  topologicalSort(degreeArr, list);
};

const topologicalSort = (degreeArr, list) => {
  const queue = [];
  let ans = "";
  for (let i = 1; i <= n; i++) {
    if (degreeArr[i] === 0) {
      queue.push(i);
    }
  }

  for (let i = 1; i <= n; i++) {
    // 큐에서 노드 꺼내고 간선 제거
    let node = queue.shift();
    ans += node + " ";

    for (let j = 0; j < list[node].length; j++) {
      let next = list[node][j];
      degreeArr[next]--;
      if (degreeArr[next] === 0) {
        queue.push(next);
      }
    }
  }

  console.log(ans);
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
