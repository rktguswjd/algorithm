const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  let n = input.shift();
  let result = "";
  for (let i = 0; i < n; i++) {
    const arr = input[i].split(" ");
    let sum = 1;
    for (let i = 0; i < arr[1]; i++) {
      sum = (sum * arr[0]) % 10;
    }
    if (sum == 0) sum = 10;
    result += sum + "\n";
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
