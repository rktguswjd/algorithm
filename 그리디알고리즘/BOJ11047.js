const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const nkArr = input[0].split(" ").map((num) => Number(num));
  const n = nkArr.shift();
  let k = nkArr.shift();
  input.shift();
  input = input.map((num) => Number(num));

  let count = 0;
  for (let i = n - 1; i >= 0; i--) {
    if (input[i] > k) continue;
    count += Math.floor(k / input[i]);
    k = k % input[i];
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
