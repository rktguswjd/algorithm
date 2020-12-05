const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  input = input[0].split("").map((num) => +num);
  const countArr = new Array(9).fill(0);
  for (let i = 0; i < input.length; i++) {
    if (input[i] == 9) {
      countArr[6] += 1;
      continue;
    }
    countArr[input[i]] += 1;
  }

  for (let j = 0; j < countArr.length; j++) {
    if (j == 6) {
      countArr[j] = Math.ceil(countArr[j] / 2);
      continue;
    }
    countArr[j] = Math.floor(countArr[j] / 1);
  }

  console.log(Math.max.apply(null, countArr));
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
