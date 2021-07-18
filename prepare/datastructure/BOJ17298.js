const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const n = +input.shift();
  const sequence = input
    .shift()
    .split(" ")
    .map((n) => +n);
  const nge = new Array(n).fill(-1);
  const stack = [];
  for (let i = 0; i < n; i++) {
    while (
      stack.length != 0 &&
      sequence[stack[stack.length - 1]] < sequence[i]
    ) {
      nge[stack.pop()] = sequence[i];
    }
    stack.push(i);
  }
  console.log(nge.join(" "));
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
