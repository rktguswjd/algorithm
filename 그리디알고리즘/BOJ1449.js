const { count } = require("console");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const NL = input[0].split(" ");
  const N = Number(NL[0]);
  const L = Number(NL[1]);
  input = input[1].split(" ").map((num) => Number(num));
  input.sort((a, b) => a - b);
  let count = 0;
  let start = 0;
  for (let loc of input) {
    if (start < loc) {
      start = loc + L - 1;
      count++;
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
