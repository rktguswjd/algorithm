const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  input.pop();
  let caseArr = [];
  for (let i = 0; i < input.length; i++) {
    let testCase = input[i].split(" ");
    let L = Number(testCase[0]);
    let P = Number(testCase[1]);
    let V = Number(testCase[2]);
    let remainder = V % P;
    if (L < remainder) remainder = L;
    caseArr.push(Math.floor(V / P) * L + remainder);
  }

  let result = "";
  for (let j = 0; j < input.length; j++) {
    result += `Case ${j + 1}: ${caseArr[j]}\n`;
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
