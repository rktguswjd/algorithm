const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const output = [];
  for (let i = 0; i < input.length - 1; i++) {
    const stack = [];
    let result = "yes";
    let arr = input[i].split("");
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] == "(" || arr[j] == "[") {
        stack.push(arr[j]);
        continue;
      }
      if (arr[j] == ")" || arr[j] == "]") {
        if (stack.length == 0) {
          result = "no";
          break;
        }
        if (
          (arr[j] == ")" && stack[stack.length - 1] == "[") ||
          (arr[j] == "]" && stack[stack.length - 1] == "(")
        ) {
          result = "no";
          break;
        }
        stack.pop();
      }
    }
    if (result == "yes" && stack.length > 0) result = "no";
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
