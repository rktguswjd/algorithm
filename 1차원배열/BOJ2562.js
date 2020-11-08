const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const testCase = (input) => {
  let max = -99;
  let index = 0;
  for (let i = 0; i < input.length; i++) {
    let number = parseInt(input[i]);
    if (max < number) {
      max = number;
      index = i;
    } else {
      max = max;
    }
  }
  console.log(max + "\n" + (index + 1));
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
