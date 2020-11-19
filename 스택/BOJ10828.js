const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const n = input.shift();
  const stack = [];
  const output = [];
  for (let i = 0; i < n; i++) {
    let arr = input[i].split(" ");
    switch (arr[0]) {
      case "push":
        const X = Number(arr[1]);
        stack.push(X);
        break;
      case "pop":
        if (stack.length == 0) {
          output.push(-1);
        } else {
          output.push(stack.pop());
        }
        break;
      case "size":
        output.push(stack.length);
        break;
      case "empty":
        if (stack.length == 0) {
          output.push(1);
        } else {
          output.push(0);
        }
        break;
      case "top":
        if (stack.length == 0) {
          output.push(-1);
        } else {
          output.push(stack[stack.length - 1]);
        }
    }
  }

  let result = "";
  for (let e of output) {
    result += e + "\n";
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
