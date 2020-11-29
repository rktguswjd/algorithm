const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const N = Number(input[0]);
  input.shift();
  input = input.map((num) => Number(num));

  let count = 0;
  for (let i = N - 2; i >= 0; i--) {
    if (input[i] < input[i + 1]) continue;
    else {
      while (input[i] >= input[i + 1]) {
        input[i]--;
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
