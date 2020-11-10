const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const n = input[0];
  const arr = input[1].split("");
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += Number(arr[i]);
  }
  console.log(sum);
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
