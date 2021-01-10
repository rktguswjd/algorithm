const { access } = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const document = input[0];
  const findWord = input[1];
  const N = document.length;
  const M = findWord.length;

  let count = 0;
  let startPos = 0;
  let findWordPos = -1;
  // 0 ~ N-1
  while (findWordPos < N) {
    findWordPos = document.indexOf(findWord, startPos);
    if (findWordPos != -1) {
      count++;
      startPos = findWordPos + M;
    } else break;
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
