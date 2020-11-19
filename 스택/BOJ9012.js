const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const n = input.shift();
  const output = [];
  for (let i = 0; i < n; i++) {
    const stack = [];
    let result = "YES";
    let arr = input[i].split("");
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] == "(") {
        stack.push(arr[j]);
        continue;
      } else if (arr[j] === ")") {
        if (stack.length == 0) {
          result = "NO";
          break;
        }
        stack.pop();
      }
    }
    if (result == "YES" && stack.length > 0) result = "NO";
    output.push(result);
  }

  for (let e of output) {
    console.log(e);
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
