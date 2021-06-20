const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const arr = input
    .shift()
    .split(" ")
    .map((n) => +n);
  let n = arr[0];
  const k = arr[1];

  let cnt = 0;

  while (n > 1) {
    console.log("n : ", n);
    cnt++;
    if (n % k == 0) {
      n /= k;
    } else {
      n -= 1;
    }
  }
  console.log(n);
  console.log(cnt);
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
