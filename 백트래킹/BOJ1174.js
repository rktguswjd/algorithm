const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let res = [];
const solution = (input) => {
  //1자리로 만들수 있는 수는 10
  const n = +input[0];
  // k자리로 만들수 있는 감소하는 수
  //
  // 1자리 2자리 3자리  10자리
  for (let i = 1; i <= 10; i++) getCnt(i, 0, []);
  console.log(res.length);
  if (n > res.length) console.log(-1);
  else console.log(res[n - 1]);
};
const getCnt = (k, cnt, arr) => {
  // k자리수 면서 감소하는 수를 만들어보자
  if (k == cnt) {
    res.push(+arr.join(""));
    return;
  }
  for (let i = 0; i <= 9; i++) {
    if (arr.length >= 1) {
      if (arr[arr.length - 1] <= i) continue;
    }
    arr.push(i);
    getCnt(k, cnt + 1, arr);
    arr.pop();
  }
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
