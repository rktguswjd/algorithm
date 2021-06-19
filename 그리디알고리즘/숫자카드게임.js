const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const temp = input
    .shift()
    .split(" ")
    .map((n) => +n);
  const n = temp[0];
  const m = temp[1];

  const minArr = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    const arr = input[i].split(" ").map((n) => +n);
    minArr[i] = Math.min.apply(null, arr);
  }

  console.log(minArr);
  console.log(Math.max.apply(null, minArr));
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
