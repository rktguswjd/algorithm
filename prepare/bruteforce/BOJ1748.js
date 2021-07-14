const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const n = +input.shift();
  // 1의 자리 개수 : n개
  // 10의 자리 개수 ? => 10부터 n까지, 즉 n - 10 + 1 개

  let cnt = 0;
  for (let i = 1; i <= n; i *= 10) {
    cnt += n - i + 1;
  }
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
