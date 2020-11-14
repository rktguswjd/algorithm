const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  input.splice(0, 1);
  const countArr = new Array(10001).fill(0);

  for (let i = 0; i < input.length; i++) {
    countArr[input[i]]++;
  }

  let result = "";
  for (let i = 1; i < 10001; i++) {
    for (let j = 0; j < countArr[i]; j++) {
      result += i + "\n";
    }
  }
  console.log(result);
};

const input = [];
const main = (rl) => {
  rl.on("line", (line) => {
    input.push(parseInt(line));
  }).on("close", () => {
    solution(input);
    process.exit();
  });
};

main(rl);
