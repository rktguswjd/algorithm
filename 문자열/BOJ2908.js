const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  let arr = input.split(" ");
  const a = arr[0].split("").reverse().join("");
  const b = arr[1].split("").reverse().join("");
  if (a > b) {
    console.log(a);
  } else {
    console.log(b);
  }
};

const main = (rl) => {
  rl.on("line", (line) => {
    solution(line);
  }).on("close", () => {
    process.exit();
  });
};

main(rl);
