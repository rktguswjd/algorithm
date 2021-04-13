const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  while (true) {
    let testCase = input.shift();
    if (testCase == "0") break;
    let s = testCase.split(" ").map((n) => +n);
    let k = s.shift();
    backtracking([], s, -1);
    ans += "\n";
  }
  console.log(ans);
};
let ans = "";
const backtracking = (pickedArr, s, start) => {
  if (pickedArr.length == 6) {
    ans += pickedArr.join(" ") + "\n";
    return;
  }

  for (let i = start + 1; i < s.length; i++) {
    pickedArr.push(s[i]);
    backtracking(pickedArr, s, i);
    pickedArr.pop();
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
