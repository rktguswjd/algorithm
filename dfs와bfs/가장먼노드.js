function solution(n, edge) {
  const list = Array.from(Array(n + 1), () => Array(0));
  const visited = new Array(n + 1).fill(0);
  for (let i = 0; i < edge.length; i++) {
    let a = edge[i][0];
    let b = edge[i][1];
    list[a].push(b);
    list[b].push(a);
  }

  bfs(1, list, visited);
  let count = 0;
  let max = Math.max(...visited);
  for (let e of visited) {
    if (e == max) count++;
  }
  return count;
}

const bfs = (v, list, visited) => {
  let queue = [];
  queue.push(v);
  // 방문 처리
  visited[v] = 1;

  while (queue.length != 0) {
    let n = queue.shift();
    for (let e of list[n]) {
      if (visited[e] != 0) continue;
      queue.push(e);
      visited[e] = visited[n] + 1;
    }
  }
};

const n = 6;
const edge = [
  [3, 6],
  [4, 3],
  [3, 2],
  [1, 3],
  [1, 2],
  [2, 4],
  [5, 2],
];
solution(n, edge);
