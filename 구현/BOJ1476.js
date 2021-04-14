const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const arr = input.shift().split(" ");
  const E = +arr[0];
  const S = +arr[1];
  const M = +arr[2];

  let e = 1;
  let s = 1;
  let m = 1;

  let year = 1;
  while (true) {
    if (e == E && s == S && m == M) break;
    year++;
    e++;
    s++;
    m++;
    if (e == 16) e = 1;
    if (s == 29) s = 1;
    if (m == 20) m = 1;
  }
  console.log(year);
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
