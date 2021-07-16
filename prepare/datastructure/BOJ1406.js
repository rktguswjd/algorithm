const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  // 스택을 두 개 이용(왼쪽스택, 오른쪽스택)
  // 처음 받은 문자열은 모두 왼쪽 스택
  // L => 왼쪽스택에서 pop한후 오른쪽스택으로 push
  // D => 오른쪽스택에서 pop한후 왼쪽스택으로 push
  // B => 왼쪽스택 pop
  // P => 왼쪽스택에 문자열 push

  // 마지막으로 왼쪽스택 모두 pop하면서 오른쪽스택으로 이동
  // 오른쪽스택 pop하면서 출력

  const leftSt = input.shift().split("");
  const n = +input.shift();

  const rightSt = [];

  for (let i = 0; i < n; i++) {
    const comm = input[i].split(" ");
    if (comm[0] === "L") {
      if (leftSt.length != 0) rightSt.push(leftSt.pop());
    } else if (comm[0] === "D") {
      if (rightSt.length != 0) leftSt.push(rightSt.pop());
    } else if (comm[0] === "B") {
      if (leftSt.length != 0) leftSt.pop();
    } else if (comm[0] === "P") {
      leftSt.push(comm[1]);
    }
  }

  while (leftSt.length != 0) {
    rightSt.push(leftSt.pop());
  }

  let str = "";
  while (rightSt.length != 0) {
    str += rightSt.pop();
  }
  console.log(str);
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
