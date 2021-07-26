const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  // 이분 그래프 : 그래프의 모든 정점이 두 그룹으로 나눠지고 서로 다른 그룹의 정점이 간선으로 연결되어있는 그래프
  // 이분 그래프 판별
  // 하나의 간선에 연결된 정점은 다른 색을 가지고 있다.
  // 따라서 탐색할 때 이미 방문처리된 정점이 자신과 같은 색상을 가지고 있다면 이분 그래프가 아니다.

  // 시간초과

  let k = +input.shift();
  for (let i = 0; i < k; i++) {
    res = "YES";
    const arr = input
      .shift()
      .split(" ")
      .map((n) => +n);
    let v = arr[0];
    let e = arr[1];
    const list = Array.from(Array(v + 1), () => Array(0));

    for (let j = 0; j < e; j++) {
      const edge = input
        .shift()
        .split(" ")
        .map((n) => +n);
      list[edge[0]].push(edge[1]);
      list[edge[1]].push(edge[0]);
    }

    // 0 => 방문안함
    // 1 => 방문했고, 레드
    // 2 => 방문했고, 블루
    const visited = new Array(v + 1).fill(0);

    for (let j = 1; j <= v; j++) {
      if (visited[j] != 0) continue;
      visited[j] = 1;
      bfs(j, visited, list);
    }
    console.log(res);
  }
};
let res;

const bfs = (v, visited, list) => {
  let prevIdx = 0;
  const queue = [];
  queue.push(v);

  while (true) {
    let curIdx = queue.length;
    let change = 0;
    for (let i = prevIdx; i < curIdx; i++) {
      let curr = queue[i];

      for (let next of list[curr]) {
        if (visited[next] != 0) {
          // 0이 아닐 때 (방문 했음)
          if (visited[curr] == visited[next]) {
            res = "NO";
            break;
          }
          continue;
        }
        if (visited[curr] == 1) visited[next] = 2;
        else visited[next] = 1;
        change = 1;
        queue.push(next);
      }
    }
    if (!change) break;
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
