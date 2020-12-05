const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const N = +input[0];
  input.shift();
  input = input[0].split(" ").map((num) => +num);
  const seat = new Array(101).fill(0);
  seat[0] = "-";

  let count = 0;
  for (let i = 0; i < N; i++) {
    let spot = input[i];
    if (seat[spot] == 0) {
      seat[spot] = i + 1;
    } else {
      count += 1;
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
