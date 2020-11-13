const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const n = input[0];
  input.splice(0, 1);
  for (let i = 0; i < n; i++) {
    let min = 1001;
    let idx = -1;
    for (let j = i + 1; j < n; j++) {
      if (min > input[j]) {
        min = input[j];
        idx = j;
      }
    }
    if (input[i] > input[idx]) {
      let temp = input[idx];
      input[idx] = input[i];
      input[i] = temp;
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
