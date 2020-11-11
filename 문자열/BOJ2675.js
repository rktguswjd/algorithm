const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const r = input[0];

  for (let i = 1; i <= r; i++) {
    let str = input[i];
    const arr = str.split(" ");
    const loopCount = arr[0];
    const strArr = arr[1].split("");
    let result = "";
    for (let e of strArr) {
      for (let i = 0; i < loopCount; i++) {
        result += e;
      }
    }
    console.log(result);
  }
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
