const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const arr = input.shift().split(" ");
  const n = +arr[0];
  const m = +arr[1];
  const r = +arr[2];
  /*1 2 3 4
    5 6 7 8
    9 10 11 12
    13 14 15 16
*/
  for (let i = 0; i < n; i++) {
    input[i] = input[i].split(" ").map((n) => +n);
  }
  for (let i = 0; i < r; i++) {
    rotateArr(input, 0, 0, input[0].length - 1, input.length - 1);
  }

  let ans = "";
  for (let i = 0; i < n; i++) {
    ans += input[i].join(" ") + "\n";
  }
  console.log(ans);
};

const rotateArr = (input, startX, startY, endX, endY) => {
  let xLen = endX - startX + 1;
  let yLen = endY - startY + 1;
  if (xLen <= 0 || yLen <= 0) return;
  let temp = input[startY][startX];
  for (let i = 1; i < xLen; i++) {
    input[startY][startX + i - 1] = input[startY][startX + i];
  }
  for (let i = 1; i < yLen; i++) {
    input[startY + i - 1][endX] = input[startY + i][endX];
  }
  for (let i = 1; i < xLen; i++) {
    input[endY][endX - i + 1] = input[endY][endX - i];
  }
  for (let i = 1; i < yLen - 1; i++) {
    input[endY - i + 1][startX] = input[endY - i][startX];
  }
  input[startY + 1][startX] = temp;
  rotateArr(input, startX + 1, startY + 1, endX - 1, endY - 1);
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
