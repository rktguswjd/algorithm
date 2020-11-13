const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const fact = (n) => {
  if (n <= 1) {
    return 1;
  } else {
    return n * fact(n - 1);
  }
};

const solution = (input) => {
  console.log(fact(input));
};

const main = (rl) => {
  rl.on("line", (line) => {
    solution(Number(line));
  }).on("close", () => {
    process.exit();
  });
};

main(rl);
