const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  for (let i = 0; i < input.length; i++) {
    input[i] = input[i].split("");
  }

  let maxLength = input[0].length;
  for (let i = 1; i < 5; i++) {
    if (maxLength < input[i].length) maxLength = input[i].length;
  }

  let result = "";
  for (let i = 0; i < maxLength; i++) {
    for (let j = 0; j < 5; j++) {
      if (input[j][i] == " " || input[j][i] == undefined) continue;
      result += input[j][i];
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
