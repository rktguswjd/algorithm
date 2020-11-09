const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getAverage = (numbers, M, N) => {
  let sum = 0;
  for (let i = 0; i < N; i++) {
    numbers[i] = (numbers[i] / M) * 100;
    sum += numbers[i];
  }
  console.log(sum / N);
};

const testCase = (input) => {
  const numbers = input[1].split(" ").map((number) => parseInt(number));
  const M = Math.max(...numbers);
  const N = input[0];
  getAverage(numbers, M, N);
};

const input = [];
const main = (rl) => {
  rl.on("line", (line) => {
    input.push(line);
  }).on("close", () => {
    testCase(input);
    process.exit();
  });
};

main(rl);
