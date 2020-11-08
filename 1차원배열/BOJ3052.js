const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const testCase = (input) => {
  for (let i = 0; i < input.length; i++) {
    input[i] = input[i] % 42;
  }

  const set = new Set(input);
  console.log(set.size);
};

const input = [];
const main = (rl) => {
  rl.on("line", (line) => {
    input.push(parseInt(line));
  }).on("close", () => {
    testCase(input);
    process.exit();
  });
};

main(rl);
