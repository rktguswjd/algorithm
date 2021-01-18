const dfs = (computers, v, visited) => {
  // 방문 확인
  visited[v] = true;
  // 노드 방문
  for (let i = 0; i < computers.length; i++) {
    // 자신 제외, 방문 기록 없는 노드, 연결된 노드
    if (i != v && !visited[i] && computers[v][i] == 1) {
      dfs(computers, i, visited);
    }
  }
};

function solution(n, computers) {
  const visited = new Array(n).fill(false);
  let answer = 0;
  // 전체 노드 방문
  for (let i = 0; i < n; i++) {
    // 이미 방문 했으면 가지 않음
    if (!visited[i]) {
      dfs(computers, i, visited);
      answer++;
    }
  }
  console.log(answer);
}

const n = 3;
const computers = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
];

solution(n, computers);
