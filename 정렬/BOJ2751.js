const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const n = input[0];

  input.splice(0, 1);
  input.sort((a, b) => a - b);
  let result = "";
  for (let e of input) {
    result += e + "\n";
  }
  console.log(result);
};

const input = [];
const main = (rl) => {
  rl.on("line", (line) => {
    input.push(parseInt(line));
  }).on("close", () => {
    solution(input);
    process.exit();
  });
};

main(rl);
