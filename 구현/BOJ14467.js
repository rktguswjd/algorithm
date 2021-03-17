const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const n = +input.shift();
  const posArr = new Array(11).fill(-1);
  for (let i = 0; i < n; i++) {
    input[i] = input[i].split(" ").map((n) => +n);
    if (posArr[input[i][0]] == -1) posArr[input[i][0]] = input[i][1];
  }

  let count = 0;
  for (let i = 0; i < n; i++) {
    let cow = input[i][0];
    let pos = input[i][1];

    if (posArr[cow] !== pos) {
      count++;
      posArr[cow] = pos;
    }
  }
  console.log(count);
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
