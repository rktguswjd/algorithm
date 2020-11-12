const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const n = input[0];
  let result = 0;
  for (let i = 1; i <= n; i++) {
    const str = input[i];
    if (str.length === 1) {
      result++;
    } else {
      const arrStr = [];
      let start = str.charAt(0);
      arrStr.push(start);
      for (let j = 1; j < str.length; j++) {
        let next = str.charAt(j);
        if (start != next) {
          if (arrStr.indexOf(next) != -1) {
            break;
          } else {
            arrStr.push(next);
            start = next;
          }
        }
        if (j == str.length - 1 || str.length == 1) result++;
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
