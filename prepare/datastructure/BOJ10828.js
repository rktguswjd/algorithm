const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const n = +input.shift();
  const stack = [];
  let result = "";
  for (let i = 0; i < n; i++) {
    const comm = input[i].split(" ");

    switch (comm[0]) {
      case "push":
        stack.push(comm[1]);
        break;

      case "pop":
        if (isEmpty(stack)) result += "-1" + "\n";
        else result += stack.pop() + "\n";
        break;

      case "size":
        result += stack.length + "\n";
        break;

      case "empty":
        if (isEmpty(stack)) result += "1" + "\n";
        else result += "0" + "\n";
        break;
      case "top":
        if (isEmpty(stack)) result += "-1" + "\n";
        else result += stack[stack.length - 1] + "\n";
        break;
    }
  }
  console.log(result);
};

const isEmpty = (stack) => {
  if (stack.length == 0) return true;
  return false;
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
