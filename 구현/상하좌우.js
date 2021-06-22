// 이코테 예제 4-1
// 구현 - 상하좌우

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = 0;
const solution = (input) => {
  n = +input.shift();
  const plan = input.shift().split(" ");
  let pos = [0, 0];

  for (let i = 0; i < plan.length; i++) {
    let comm = plan[i];
    let y = pos[0];
    let x = pos[1];

    switch (comm) {
      case "L":
        if (checkRange(y, x - 1)) {
          pos = [y, x - 1];
        }
        break;
      case "R":
        if (checkRange(y, x + 1)) {
          pos = [y, x + 1];
        }
        break;
      case "U":
        if (checkRange(y - 1, x)) {
          pos = [y - 1, x];
        }
        break;
      case "D":
        if (checkRange(y + 1, x)) {
          pos = [y + 1, x];
        }
        break;
    }
  }
  console.log(pos[0] + 1, pos[1] + 1);
};

const checkRange = (y, x) => {
  // 범위 벗어나면 false return
  if (0 > x || 0 > y || x > n || y > n) return false;
  return true;
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
