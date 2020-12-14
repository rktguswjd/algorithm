const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (N) => {
  N = +N;
  if (N % 2 == 0) console.log("CY");
  else console.log("SK");
};

const input = [];
const main = (rl) => {
  rl.on("line", (line) => {
    solution(line);
  }).on("close", () => {
    process.exit();
  });
};

main(rl);
