const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let n;
let k;
const solution = (input) => {
  // 수빈이의 현재 위치 N
  // 동생의 위치 K

  // 수빈이가 동생을 찾을 수 있는 가장 빠른시간은 몇 초인지
  // 수빈이는 걷거나 순간이동 가능
  // 걷기: 1초 후에 X-1 or X+1 로 이동
  // 순간이동: 1초 후에 2*X 로 이동

  const arr = input
    .shift()
    .split(" ")
    .map((n) => +n);
  n = arr[0];
  k = arr[1];

  const visited = new Array(100001).fill(false);
  bfs(0, visited);
};

const bfs = (cnt, visited) => {
  let queue = [];
  queue.push(n);
  visited[n] = true;
  let flag = false;

  while (true) {
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      let cur = queue.shift();

      if (cur == k) {
        // 수빈이의 위치가 동생 위치와 같을 때
        // 시간 카운트 출력하고 종료
        console.log(cnt);
        flag = true;
        break;
      }

      if (cur - 1 >= 0 && !visited[cur - 1]) {
        // 현재 위치에서 -1의 위치가 0이상이면서 방문하지 않았다면
        // 큐에 넣어주고 방문처리
        queue.push(cur - 1);
        visited[cur - 1] = true;
      }
      if (cur + 1 <= 100000 && !visited[cur + 1]) {
        // 현재 위치에서 +1의 위치가 100000이하면서 방문하지 않았다면
        // 큐에 넣어주고 방문처리
        queue.push(cur + 1);
        visited[cur + 1] = true;
      }
      if (cur * 2 <= 100000 && !visited[cur * 2]) {
        // 현재 위치에서 x2의 위치가 100000이하면서 방문하지 않았다면
        // 큐에 넣어주고 방문처리
        queue.push(cur * 2);
        visited[cur * 2] = true;
      }
      // 시간 증가
    }
    if (flag) break;
    cnt++;
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
