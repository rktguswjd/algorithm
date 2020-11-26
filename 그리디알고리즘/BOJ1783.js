const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  input = input[0].split(" ");
  const N = Number(input[0]);
  const M = Number(input[1]);
  let result = 0;

  if (N === 1) {
    result = 1;
  } else if (N === 2) {
    if (M >= 7) {
      result = 4;
    } else {
      result = Math.floor((M + 1) / 2);
    }
  } else if (N >= 3) {
    if (M <= 4) {
      result = M;
    } else if (M < 7) {
      result = 4;
    } else {
      result = M - 2;
    }
  }
  console.log(result);
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
