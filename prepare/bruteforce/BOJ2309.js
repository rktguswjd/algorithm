const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  // 일곱 난쟁이의 키의 합이 100
  input.sort((a, b) => a - b);
  // 아홉 난쟁이 키의 합을 구한다
  let nineSum = 0;
  for (let i of input) {
    nineSum += +i;
  }

  // 아홉 난쟁이 키에서 100을 뺀 값 저장
  const diff = nineSum - 100;

  // 두 난쟁이씩 키를 확인하여 diff와 같을 때
  let a = 0;
  let b = 0;
  let flag = true;
  for (let i = 0; i < input.length; i++) {
    a = +input[i];
    for (let j = i + 1; j < input.length; j++) {
      b = +input[j];
      if (diff == a + b) {
        flag = false;
        break;
      }
    }
    if (!flag) break;
  }

  let result = "";
  // 두 난쟁이를 제외한 나머지 난정이의 키를 출력
  for (let n of input) {
    if (+n == a || +n == b) continue;
    result += n + "\n";
  }

  console.log(result);
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
