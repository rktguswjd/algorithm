const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  for (let i = 0; i < 8; i++) {
    input[i] = input[i].split("");
  }

  let count = 0;
  for (let i = 0; i < 8; i += 2) {
    for (let j = 0; j < 8; j += 2) {
      if (input[i][j] === "F") {
        count++;
      }
    }
  }

  for (let k = 1; k < 8; k += 2) {
    for (let l = 1; l < 8; l += 2) {
      if (input[k][l] === "F") {
        count++;
      }
    }
  }

  console.log(count);
};

const input = [];
const main = (rl) => {
  rl.on("line", (line) => {
    input.push(line);
  }).on("close", () => {
    solution(input);
    process.exit();
  });
};

main(rl);
