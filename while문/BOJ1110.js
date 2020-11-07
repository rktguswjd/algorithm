const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const result = (N) => {
  let number = N;
  let sum = parseInt(number / 10) + (number % 10);

  return (number % 10) * 10 + (sum % 10);
};

const testCase = (number) => {
  let N = number;
  let cnt = 1;
  let M = result(N);
  while (N !== M) {
    M = result(M);
    cnt++;
  }
  return cnt;
};

const main = (rl) => {
  rl.on("line", (line) => {
    console.log(testCase(parseInt(line)));
  }).on("close", () => {
    process.exit();
  });
};

main(rl);
