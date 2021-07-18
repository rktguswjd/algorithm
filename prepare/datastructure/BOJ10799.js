const { connected } = require("process");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const str = input.shift();
  let result = 0;
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === "(") {
      // 여는 괄호일 때
      stack.push(str.charAt(i));
    } else {
      // 닫는 괄호일 때
      if (str.charAt(i) !== str.charAt(i - 1)) {
        // 전 괄호가 다를 때, 즉 레이저일 때
        stack.pop();
        result += stack.length;
      } else {
        // 전 괄호가 같을 때, 레이저가 아닐 때
        stack.pop();
        result += 1;
      }
    }
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
