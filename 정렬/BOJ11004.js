const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const nkArr = input[0].split(" ");
  const N = +nkArr[0];
  const K = +nkArr[1];
  input.shift();
  input = input[0].split(" ").map((num) => +num);
  input.sort((a, b) => a - b);
  console.log(input[K - 1]);
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
