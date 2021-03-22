const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let keyboard = new Map();
const solution = (input) => {
  keyboard = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["z", "x", "c", "v", "b", "n", "m"],
  ];

  const arr = input.shift().split(" ");
  let sL = arr[0];
  let sR = arr[1];

  let count = input[0].length;
  let xyLeft = findCoor(sL);
  let xyRight = findCoor(sR);

  for (let i = 0; i < input[0].length; i++) {
    if (input[0].charAt(i) === sL || input[0].charAt(i) === sR) continue;
    let nowCoor = findCoor(input[0].charAt(i));
    if (
      (!nowCoor[0] && nowCoor[1] >= 0 && nowCoor[1] <= 4) ||
      (nowCoor[0] === 1 && nowCoor[1] >= 0 && nowCoor[1] <= 4) ||
      (nowCoor[0] === 2 && nowCoor[1] >= 0 && nowCoor[1] <= 3)
    ) {
      // 자음
      count +=
        Math.abs(xyLeft[0] - nowCoor[0]) + Math.abs(xyLeft[1] - nowCoor[1]);
      xyLeft = nowCoor;
      sL = input[0].charAt(i);
    } else {
      // 모음
      count +=
        Math.abs(xyRight[0] - nowCoor[0]) + Math.abs(xyRight[1] - nowCoor[1]);
      xyRight = nowCoor;
      sR = input[0].charAt(i);
    }
  }
  console.log(count);
};

const findCoor = (str) => {
  let x = 0;
  let y = 0;
  for (let i = 0; i < keyboard.length; i++) {
    for (let j = 0; j < keyboard[i].length; j++) {
      if (keyboard[i][j] === str) {
        y = j;
        x = i;
        break;
      }
    }
  }
  return [x, y];
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
