const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let r = 0;
let c = 0;
let graph;
let startY = 0;
let startX = 0;
let targetY = 0;
let targetX = 0;
let visitedWater;
let visitedDotch;
const solution = (input) => {
  const arr = input.shift().split(" ");
  r = +arr[0];
  c = +arr[1];
  graph = Array.from(Array(r), () => Array(c).fill(0));
  visitedWater = Array.from(Array(r), () => Array(c).fill(0));
  visitedDotch = Array.from(Array(r), () => Array(c).fill(0));
  for (let i = 0; i < r; i++) {
    input[i] = input[i].split("");
    for (let j = 0; j < c; j++) {
      switch (input[i][j]) {
        case "D": {
          targetX = j;
          targetY = i;
          graph[i][j] = 5;
          break;
        }
        case "S": {
          startX = j;
          startY = i;
          break;
        }
        case "X": {
          graph[i][j] = 3;
          break;
        }
        case "*": {
          queueWater.push([i, j]);
          graph[i][j] = 2;
          break;
        }
      }
    }
  }

  // 물 2 돌 3 목표 5
  bfs();
  let ans = visitedDotch[targetY][targetX];
  if (ans == 0) console.log("KAKTUS");
  else console.log(ans - 1);
};
let queueWater = [];
let tempWater = [];
let queueDotch = [];
let tempDotch = [];
let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];
const bfs = () => {
  visitedWater[startY][startX] = 1;
  visitedDotch[startY][startX] = 1;
  queueDotch.push([startY, startX]);
  while (true) {
    //물이 먼저
    while (queueWater.length != 0) {
      let now = queueWater.shift();
      for (let i = 0; i < 4; i++) {
        let nextX = now[1] + dx[i];
        let nextY = now[0] + dy[i];
        if (nextX < 0 || nextY < 0 || nextY >= r || nextX >= c) continue;
        if (graph[nextY][nextX] == 5 || graph[nextY][nextX] == 3) continue;
        if (visitedWater[nextY][nextX] != 0) continue;
        visitedWater[nextY][nextX] = 1;
        graph[nextY][nextX] = 2;
        tempWater.push([nextY, nextX]);
      }
    }
    while (queueDotch.length != 0) {
      let now = queueDotch.shift();
      for (let i = 0; i < 4; i++) {
        let nextX = now[1] + dx[i];
        let nextY = now[0] + dy[i];
        if (nextX < 0 || nextY < 0 || nextY >= r || nextX >= c) continue;
        if (graph[nextY][nextX] == 3 || graph[nextY][nextX] == 2) continue;
        if (visitedDotch[nextY][nextX] != 0) continue;
        visitedDotch[nextY][nextX] = visitedDotch[now[0]][now[1]] + 1;
        tempDotch.push([nextY, nextX]);
      }
    }
    while (tempDotch.length != 0) {
      queueDotch.push(tempDotch.pop());
    }

    while (tempWater.length != 0) {
      queueWater.push(tempWater.pop());
    }
    let str = "";
    for (let e of visitedDotch) {
      for (let i of e) {
        str += i + " ";
      }
      str += "\n";
    }
    console.log(str);
    if (queueDotch.length == 0) break;
  }
};

// 물을 먼저 가게하고
// 고슴도치는 물이 간곳을 못가자나
// 물을 먼저 갈곳을 봐서 temp에 담아
// 고슴도칙도 내가 갈곳을을 temp에 담아
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
