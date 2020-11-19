const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const n = input.shift();
  const stack = [];
  for (let i = 0; i < n; i++) {
    if (input[i] == 0) {
      stack.pop();
      continue;
    }
    stack.push(input[i]);
  }

  let sum = 0;
  for (let e of stack) {
    sum += e;
  }
  console.log(sum);
};

const input = [];
const main = (rl) => {
  rl.on("line", (line) => {
    input.push(Number(line));
  }).on("close", () => {
    solution(input);
    process.exit();
  });
};

main(rl);
