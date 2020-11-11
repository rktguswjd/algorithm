const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  let arr = input.split(" ");
  arr = arr.filter((item) => {
    return item !== null && item !== undefined && item !== "";
  });
  console.log(arr.length);
};

const main = (rl) => {
  rl.on("line", (line) => {
    solution(line);
  }).on("close", () => {
    process.exit();
  });
};

main(rl);
