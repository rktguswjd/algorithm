const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const N = Number(input.shift());
  input = input[0].split(" ");
  const sortArr = new Array(N).fill(0);

  for (let i = 0; i < N; i++) {
    let leftCount = Number(input[i]);
    let count = 0;
    for (let j = 0; j < N; j++) {
      if (sortArr[j] == 0) {
        if (leftCount == count) {
          sortArr[j] = i + 1;
          break;
        }
        count++;
      } else continue;
    }
  }

  let result = "";
  for (let e of sortArr) {
    result += e + " ";
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
