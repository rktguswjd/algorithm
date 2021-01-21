const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let map = [];
let m = "";
let n = "";
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const dfs = (i, j) => {
  // 방문 처리
  map[i][j] = 1;
  let stack = [];
  stack.push(i);
  stack.push(j);
  let area = 1;

  while (stack.length != 0) {
    // 원소 뽑기
    let y = stack.pop();
    let x = stack.pop();
    // 주변 탐색
    for (let k = 0; k < 4; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];
      // 배열 범위 검사
      if (nx >= m || ny >= n || ny < 0 || nx < 0) continue;
      // 방문 검사
      if (map[nx][ny] != 0) continue;
      stack.push(nx);
      stack.push(ny);
      map[nx][ny] = 1;
      area += 1;
    }
  }
  return area;
};

const solution = (input) => {
  let temp = input
    .shift()
    .split(" ")
    .map((e) => +e);
  m = temp[0];
  n = temp[1];
  const k = temp[2];
  map = Array.from(Array(m), () => Array(n).fill(0));

  // 상하 반전
  for (let i = 0; i < k; i++) {
    let [y1, x1, y2, x2] = input[i].split(" ").map((e) => +e);
    // 모눈종이 그리기
    for (let i = x1; i < x2; i++) {
      for (let j = y1; j < y2; j++) {
        map[i][j] = 1;
      }
    }
  }

  let ans = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (map[i][j] != 0) continue;
      ans.push(dfs(i, j));
    }
  }

  // 정렬
  ans.sort((a, b) => a - b);

  // 영역 개수
  console.log(ans.length);
  // 각 영역 넓이
  console.log(ans.join(" "));
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
