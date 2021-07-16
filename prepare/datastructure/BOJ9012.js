const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const n = +input.shift();
  let result = "";

  for (let i = 0; i < n; i++) {
    const str = input[i];
    const stack = [];
    let ans = "YES";
    for (let s = 0; s < str.length; s++) {
      if (str.charAt(s) === "(") {
        stack.push("(");
      } else {
        if (stack.length == 0) {
          ans = "NO";
          break;
        }
        stack.pop();
      }
    }
    if (stack.length > 0 && ans === "YES") ans = "NO";
    result += ans + "\n";
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
