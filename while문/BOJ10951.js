const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const testCase = (input) => {
  let i = 0;
  let result = "";
  while (i < input.length) {
    const A = parseInt(input[i][0]);
    const B = parseInt(input[i][1]);
    i++;
    result += A + B + "\n";
  }
  return result;
};

const input = [];
const main = (rl) => {
  rl.on("line", (line) => {
    input.push(line.split(" "));
  }).on("close", () => {
    console.log(testCase(input));
    process.exit();
  });
};

main(rl);
