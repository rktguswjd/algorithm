const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const testCase = (input) => {
  const N = parseInt(input[0]);
  let MIN = 1000000;
  let MAX = -1000000;
  for (let i = 0; i < N; i++) {
    const number = parseInt(input[1][i]);
    MAX = MAX < number ? number : MAX;
    MIN = MIN > number ? number : MIN;
  }
  console.log(MIN, MAX);
};

const input = [];
const main = (rl) => {
  rl.on("line", (line) => {
    input.push(line.split(" "));
  }).on("close", () => {
    testCase(input);
    process.exit();
  });
};
main(rl);
