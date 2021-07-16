const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  // 1. 스택이 비어있으면 push (push할때마다 nArr 숫자 지우기)
  // 2. 스택의 top과 현재 수열 비교
  //      1. 같다면 pop
  //      2. 다르다면
  //          1. 현재 수열과 nArr숫자가 일치할 때까지 push
  //          2. nArr가 없다면 종료후 stack의 숫자 모두 pop
  const n = +input.shift();

  const nArr = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    nArr[i] = i + 1;
  }

  const stack = [];
  let result = "";
  let sequence = "";
  let pos = 0;
  while (pos < n && nArr.length != 0) {
    if (stack.length == 0) {
      stack.push(nArr.shift());
      result += "+" + "\n";
    } else {
      if (stack[stack.length - 1] == +input[pos]) {
        sequence += stack.pop() + "";
        pos++;
        result += "-" + "\n";
      } else {
        stack.push(nArr.shift());
        result += "+" + "\n";
      }
    }
  }

  while (stack.length != 0) {
    sequence += stack.pop() + "";
    result += "-" + "\n";
  }

  if (input.join("") !== sequence) console.log("NO");
  else console.log(result);
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
