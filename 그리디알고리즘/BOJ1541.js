const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (str) => {
  const strArr = str.split("-");
  let sum = 0;
  let splited = strArr[0].split("+");
  for (let e of splited) {
    sum += Number(e);
  }
  let result = sum;

  for (let i = 1; i < strArr.length; i++) {
    splited = strArr[i].split("+");
    sum = 0;
    for (let e of splited) {
      sum += Number(e);
    }
    result -= sum;
  }
  console.log(result);
};

const main = (rl) => {
  rl.on("line", (line) => {
    solution(line);
  }).on("close", () => {
    process.exit();
  });
};

main(rl);
