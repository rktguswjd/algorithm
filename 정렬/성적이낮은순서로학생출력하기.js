const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 2
// 홍길동 95
// 이순신 77

const solution = (input) => {
  const n = +input.shift();

  const arr = [];
  for (let i = 0; i < n; i++) {
    const temp = input[i].split(" ");
    arr.push([temp[0], +temp[1]]);
  }

  let result = "";
  arr.sort((a, b) => {
    if (a[1] > b[1]) return 1;
    return -1;
  });

  for (let i = 0; i < n; i++) {
    result += arr[i][0] + " ";
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
