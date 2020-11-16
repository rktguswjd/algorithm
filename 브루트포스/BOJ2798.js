const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const nmArr = input[0].split(" ").map((num) => Number(num));
  const n = nmArr.shift();
  const m = nmArr.shift();
  input.shift();
  input = input[0].split(" ").map((num) => Number(num));

  let max = 0;
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        let sum = input[i] + input[j] + input[k];
        if (sum > max && sum <= m) {
          max = sum;
        }
      }
    }
  }

  console.log(max);
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
