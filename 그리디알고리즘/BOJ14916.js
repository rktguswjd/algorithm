const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  let n = +input.shift();
  let count = 0;

  while (n > 0) {
    if (n % 5 == 0) {
      count += Math.floor(n / 5);
      break;
    }
    n -= 2;
    count++;
  }

  if (n < 0) console.log(-1);
  else console.log(count);
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
