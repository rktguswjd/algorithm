const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const check = (number) => {
  const str = "" + number;
  const arr = str.split("");
  let result = true;
  const diff = arr[0] - arr[1];
  for (let i = 1; i < arr.length - 1; i++) {
    if (diff !== arr[i] - arr[i + 1]) {
      result = false;
      break;
    }
    result = true;
  }
  return result;
};

const solution = (number) => {
  const n = number;
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (i < 100) {
      count++;
    } else {
      if (check(i)) count++;
    }
  }
  console.log(count);
};

const main = (rl) => {
  rl.on("line", (line) => {
    solution(parseInt(line));
  }).on("close", () => {
    process.exit();
  });
};
main(rl);
