const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const n = +input.shift();
  const nMap = new Map();
  const postfix = input.shift().split("");
  const stack = [];
  let ans = 0;

  for (let i = 0; i < postfix.length; i++) {
    if (
      postfix[i] == "+" ||
      postfix[i] == "-" ||
      postfix[i] == "*" ||
      postfix[i] == "/"
    ) {
      let a = stack.pop();
      let b = stack.pop();
      switch (postfix[i]) {
        case "+":
          ans = b + a;
          break;

        case "-":
          ans = b - a;
          break;

        case "*":
          ans = b * a;
          break;

        case "/":
          ans = b / a;
          break;
      }
      stack.push(ans);
    } else {
      if (nMap.get(postfix[i]) == undefined) {
        nMap.set(postfix[i], +input.shift());
      }
      stack.push(nMap.get(postfix[i]));
    }
  }
  console.log(stack[0].toFixed(2));
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
