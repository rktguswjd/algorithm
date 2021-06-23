// 이코테 실전문제
// 구현 - 게임개발

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 1. 현재 위치에서 현재 방향을 기준으로 왼쪽 방향 부터 차례대로 갈 곳을 정한다.
// 2. 캐릭터의 바로 왼쪽 방향에 가보지 않은 칸이 없다면, 왼쪽 방향으로 회전만 수행하고 1단계로 돌아간다.
// 3. 만약 네 방향 모두 이미 가본 칸이거나 바다로 되어 있는 칸인 경우에는, 바라보는 방향을 유지한 채로 한 칸 뒤로가고 1단계로 돌아간다. 단, 이때 뒤쪽 방향이 바다인 칸이라 뒤로 갈 수 없는 경우에는 움직임을 멈춘다,

// 4 4
// 1 1 0
// 1 1 1 1
// 1 0 0 1
// 1 1 0 1
// 1 1 1 1
let direction = 0;
const solution = (input) => {
  const size = input
    .shift()
    .split(" ")
    .map((n) => +n);
  const r = size[0];
  const c = size[1];

  const arr = input
    .shift()
    .split(" ")
    .map((n) => +n);
  let y = arr[0];
  let x = arr[1];
  direction = arr[2];

  let ansCtn = 0;
  let fCnt = 0;

  const map = [];
  for (let i = 0; i < input.length; i++) {
    map.push(input[i].split(" ").map((n) => +n));
  }

  // 현재 위치 방문 처리
  map[y][x] = 1;
  ansCtn++;

  // 북 동 남 서 = 0 1 2 3
  const dy = [-1, 0, 1, 0];
  const dx = [0, 1, 0, -1];
  let nextY = 0;
  let nextX = 0;
  while (true) {
    // 왼쪽으로 회전
    leftRotation();
    // 다음 갈 곳
    nextY = y + dy[direction];
    nextX = x + dx[direction];

    // 가 본 칸이라면 회전만 수행한 후 다음
    if (map[nextY][nextX] == 1) {
      fCnt++;
      if (fCnt == 4) {
        // 네 방향 모두 가본 칸이거나 바다로 되어 있는 경우
        // 방향 유지, 한칸 뒤로
        nextY = y - dy[direction];
        nextX = x - dx[direction];
        // 뒤가 막혀 있다면 종료
        if (map[nextY][nextX] == 1) break;
        // 갈 수 있다면 이동 후 방문 처리
        y = nextY;
        x = nextX;
        fCnt = 0;
      }
    } else {
      // 아직 가보지 않은 칸이라면 이동 후 방문처리
      map[nextY][nextX] = 1;
      y = nextY;
      x = nextX;
      ansCtn++;
      fCnt = 0;
    }
  }
  console.log(ansCtn);
};

const leftRotation = () => {
  direction--;
  if (direction < 0) {
    direction = 3;
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
