const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (n) => {
  const input = n.split("");
  input.sort((a, b) => b - a);
  let result = "";
  for (let e of input) {
    result += e;
  }
  console.log(result);
};

const main = (rl) => {
  rl.on("line", (line) => {
    solution(line);
  }).on("close", () => {
    process.exit();
  });
};

main(rl);
