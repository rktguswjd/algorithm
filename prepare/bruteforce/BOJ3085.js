const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 동 서 남 북
const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];
const solution = (input) => {
  // 사탕의 색이 다른 인접한 두 칸을 고른 다음 교환
  // 모두 같은 색으로 이루어져 있는 가장 긴 연속된 부분 행 또는 열을 고른 다음 먹음
  // 먹을 수 있는 최대 개수

  // 인접한 네 방향 검사 후 교체
  // 교체되면 연속된 부분 행 또는 열을 탐색

  const n = +input.shift();
  for (let i = 0; i < n; i++) {
    input[i] = input[i].split("");
  }
  let max = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let d = 0; d < 4; d++) {
        let nextY = i + dy[d];
        let nextX = j + dx[d];
        // 배열의 범위 검사
        if (nextY < 0 || nextY >= n || nextX < 0 || nextX >= n) continue;
        // 현재 사탕과 다른 사탕인지 검사
        if (input[i][j] === input[nextY][nextX]) continue;

        // swap진행
        [input[i][j], input[nextY][nextX]] = [input[nextY][nextX], input[i][j]];

        // swap후 부분 행 탐색
        for (let r = 0; r < n; r++) {
          let candy = input[r][0];
          let cnt = 1;
          for (let c = 1; c < n; c++) {
            if (candy === input[r][c]) cnt++;
            else {
              max = Math.max(max, cnt);
              candy = input[r][c];
              cnt = 1;
            }
          }
          // CGPGPP
          if (cnt != 1) max = Math.max(max, cnt);
        }

        // swap후 부분 열 탐색
        for (let c = 0; c < n; c++) {
          let candy = input[0][c];
          let cnt = 1;
          for (let r = 1; r < n; r++) {
            if (candy === input[r][c]) cnt++;
            else {
              max = Math.max(max, cnt);
              candy = input[r][c];
              cnt = 1;
            }
          }
          // CGPGPP
          if (cnt != 1) max = Math.max(max, cnt);
        }

        // 최대 개수 구한후 다시 swap
        [input[i][j], input[nextY][nextX]] = [input[nextY][nextX], input[i][j]];
      }
    }
  }
  console.log(max);
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
// GPPCGP
