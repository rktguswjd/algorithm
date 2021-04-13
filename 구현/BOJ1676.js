const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const n = input.shift();
  let cnt2 = 0;
  let cnt5 = 0;
  if (n > 0) {
    for (let i = 1; i <= n; i++) {
      let temp2 = i;
      let temp5 = i;
      while (temp2 % 2 == 0) {
        cnt2++;
        temp2 /= 2;
      }
      while (temp5 % 5 == 0) {
        cnt5++;
        temp5 /= 5;
      }
    }
  }
  console.log(Math.min(cnt2, cnt5));
};

const input = [];
const main = (rl) => {
  rl.on("line", (line) => {
    input.push(Number(line));
  }).on("close", () => {
    solution(input);
    process.exit();
  });
};
main(rl);
