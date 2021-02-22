const solution = (v, e, k, input) => {
  const distance = new Array(v + 1).fill(Infinity);
  const list = Array.from(Array(v + 1), () => Array(0));
  for (let i = 0; i < input.length; i++) {
    list[input[i][0]].push([input[i][1], input[i][2]]);
  }
  const visited = new Array(v + 1).fill(false);
  dijkstra(k, distance, list, visited);
};

const dijkstra = (k, distance, list, visited) => {
  distance[k] = 0;
  const queue = [];
  queue.push([k, 0]);

  while (queue.length != 0) {
    queue.sort((a, b) => a[1] - b[1]);
    let now = queue.shift();
    if (visited[now[0]]) continue;
    visited[now[0]] = true;
    for (let v = 0; v < list[now[0]].length; v++) {
      let next = list[now[0]][v];
      if (distance[next[0]] > distance[now[0]] + next[1]) {
        distance[next[0]] = distance[now[0]] + next[1];
        queue.push([next[0], distance[next[0]]]);
      }
    }
  }
  console.log(distance);
};

const v = 5;
const e = 6;
const k = 1;
const input = [
  [5, 1, 1],
  [1, 2, 2],
  [1, 3, 3],
  [2, 3, 4],
  [2, 4, 5],
  [3, 4, 6],
];
solution(v, e, k, input);
