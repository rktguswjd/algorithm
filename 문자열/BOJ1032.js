const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const N = +input[0];
  input.shift();

  let result = "";
  if (N == 1) {
    for (let e of input) {
      result += e;
    }
  } else {
    for (let i = 0; i < N; i++) {
      input[i] = input[i].split("");
    }

    for (let i = 0; i < N - 1; i++) {
      for (let j = 0; j < input[0].length; j++) {
        if (input[i][j] == input[i + 1][j]) continue;
        else {
          input[i + 1][j] = "?";
        }
      }
    }

    for (let k = 0; k < input[0].length; k++) {
      result += input[N - 1][k];
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
