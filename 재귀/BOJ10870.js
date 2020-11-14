const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const fibonacci = (n) => {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else if (n > 1) {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
};

const main = (rl) => {
  rl.on("line", (line) => {
    console.log(fibonacci(Number(line)));
  }).on("close", () => {
    process.exit();
  });
};

main(rl);
