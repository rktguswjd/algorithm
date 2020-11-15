const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const n = input.shift();
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(input[i]);
  }
  let strArr = arr.filter((item, index) => arr.indexOf(item) === index);
  strArr.sort((a, b) => {
    if (a.length > b.length) return 1;
    else if (a.length == b.length) {
      if (a > b) return 1;
    }
    return -1;
  });

  let result = "";
  for (let e of strArr) {
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
