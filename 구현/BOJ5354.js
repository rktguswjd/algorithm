const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require("constants");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const N = +input.shift();

  for (let i = 0; i < N; i++) {
    let boxLength = input[i];
    let result = "";
    for (let j = 0; j < boxLength; j++) {
      for (let k = 0; k < boxLength; k++) {
        if (j == 0 || j == boxLength - 1) {
          result += "#";
        } else {
          if (k == 0 || k == boxLength - 1) {
            result += "#";
          } else {
            result += "J";
          }
        }
      }
      result += "\n";
    }
    console.log(result);
  }
};

const input = [];
const main = (rl) => {
  rl.on("line", (line) => {
    input.push(+line);
  }).on("close", () => {
    solution(input);
    process.exit();
  });
};

main(rl);
