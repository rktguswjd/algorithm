const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const result = (N, X, A) => {
  const answer = [];
  for (let i = 0; i < N; i++) {
    const numbers = +A[i];
    if (numbers < X) {
      answer.push(numbers);
    }
  }
  return answer.join(" ");
};

const input = [];
const start = (rl) => {
  rl.on("line", (line) => {
    input.push(line.split(" "));
  }).on("close", () => {
    const N = parseInt(input[0][0]);
    const X = parseInt(input[0][1]);
    const A = input[1];
    console.log(result(N, X, A));
    process.exit();
  });
};

start(rl);
