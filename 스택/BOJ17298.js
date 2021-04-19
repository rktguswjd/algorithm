const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const n = +input.shift();
  const arr = input
    .shift()
    .split(" ")
    .map((n) => +n);
  const NGE = new Array(n).fill(-1);
  const stack = [];
  stack.push(0);
  for (let i = 1; i < n; i++) {
    while (stack.length != 0 && arr[stack[stack.length - 1]] < arr[i]) {
      NGE[stack.pop()] = arr[i];
    }
    stack.push(i);
  }
  console.log(NGE.join(" "));
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
