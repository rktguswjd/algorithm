const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  // 오등큰수
  // 오른쪽에 있으면서 수열 A에서 등장한 횟수가 F(Ai)보다 큰 수 중 가장 왼쪽에 있는 수

  const n = +input.shift();
  const seq = input
    .shift()
    .split(" ")
    .map((n) => +n);
  const ngf = new Map();
  const stack = [];
  const result = new Array(n).fill(-1);

  for (let i = 0; i < n; i++) {
    if (!ngf.has(seq[i])) {
      ngf.set(seq[i], 1);
    } else {
      ngf.set(seq[i], ngf.get(seq[i]) + 1);
    }
  }

  for (let i = 0; i < n; i++) {
    while (
      stack.length != 0 &&
      ngf.get(seq[stack[stack.length - 1]]) < ngf.get(seq[i])
    ) {
      result[stack.pop()] = seq[i];
    }
    stack.push(i);
  }

  console.log(result.join(" "));
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
