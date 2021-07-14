const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let n;
let m;
let k;
const solution = (input) => {
  // N*M 격자판에서 K개의 정수를 골라 더한 값 중 최댓값
  // 단, 선택한 두 칸이 인접하면 안됨

  const arr = input
    .shift()
    .split(" ")
    .map((n) => +n);
  n = arr[0]; // 1~10
  m = arr[1]; // 1~10
  k = arr[2]; //4~ 100

  const map = [];
  for (let i = 0; i < n; i++) {
    map.push(input[i].split(" ").map((n) => +n));
  }
  // map n m k
  // 1 2 3 4 -> (1,0,0) () () ()
  // 5 6 7 8 -> (5,0,1)
  // 7 6 5 4
  // 3 2 1 2

  // 8 7 7 6 6 5 5 . . . .
  // k = 3
  // 좌표 검증
  // 8 7 7 -> 10000
  //
  let total = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      total.push([map[i][j], i, j]);
    }
  }

  //   total.sort((a, b) => b[0] - a[0]);

  //조합 k를 뽑는
  combination(total, [], -1);
  console.log(max);
  //100
};
let max = -1000001;

function combination(total, arr, start) {
  if (arr.length == k) {
    if (filter(arr)) {
      let sum = 0;
      for (let a = 0; a < arr.length; a++) {
        sum += arr[a][0];
      }
      max = Math.max(max, sum);
    }
    return;
  }
  for (let i = start + 1; i < total.length; i++) {
    arr.push(total[i]);
    combination(total, arr, i);
    arr.pop();
  }
}
function filter(arr) {
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  //[1, 2, 3 , 4, 5]
  for (let i = 0; i < arr.length; i++) {
    //기준
    let x = arr[i][1];
    let y = arr[i][2];
    for (let j = i + 1; j < arr.length; j++) {
      let Tx = arr[j][1];
      let Ty = arr[j][2];
      for (let d = 0; d < 4; d++) {
        if (x + dx[d] == Tx && y + dy[d] == Ty) return false;
      }
    }
  }
  return true;
}
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
