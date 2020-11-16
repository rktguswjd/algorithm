const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const n = input.shift();
  const arr = input[0].split(" ").map((num) => Number(num));
  arr.sort((a, b) => a - b);

  let sum = 0;
  const output = [];
  for (let i = 0; i < n; i++) {
    sum += arr[i];
    output.push(sum);
  }

  let result = 0;
  for (let e of output) {
    result += e;
  }

  console.log(result);
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
