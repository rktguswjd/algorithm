const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  let sum = 0;
  input.sort((a, b) => a - b);
  for (let i = 0; i < input.length; i++) {
    sum += input[i];
  }
  let A = "";
  let B = "";
  let flag = false;
  const diff = sum - 100;
  for (let i = 0; i < input.length; i++) {
    A = input[i];
    for (let j = i + 1; j < input.length; j++) {
      B = input[j];
      if (diff == A + B) {
        flag = true;
        break;
      }
    }
    if (flag == true) {
      break;
    }
  }

  let result = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] == A || input[i] == B) continue;
    result += input[i] + "\n";
  }

  console.log(result);
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
