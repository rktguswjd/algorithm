const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const n = input[0];
  input.splice(0, 1);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (input[j] > input[j + 1]) {
        let temp = input[j];
        input[j] = input[j + 1];
        input[j + 1] = temp;
      }
    }
  }
  for (let e of input) {
    console.log(e);
  }
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
