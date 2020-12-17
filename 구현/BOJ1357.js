const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const Rev = (num) => {
  let revNum = num.toString().split("").reverse().join("");
  return +revNum;
};

const solution = (input) => {
  input = input[0].split(" ");
  const X = +input[0];
  const Y = +input[1];
  console.log(Rev(Rev(X) + Rev(Y)));
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
