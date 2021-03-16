const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const n = +input.shift();
  const m = +input.shift();
  const s = input.shift();

  let count = 0;
  let pCnt = 0;
  for (let i = 0; i < m - 2; i++) {
    if (
      s.charAt(i) === "I" &&
      s.charAt(i + 1) === "O" &&
      s.charAt(i + 2) === "I"
    ) {
      pCnt++;
      if (pCnt === n) {
        pCnt--;
        count++;
      }
      i++;
    } else pCnt = 0;
  }
  console.log(count);
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
