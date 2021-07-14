const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  // 리모컨 : 0~9, +, -
  // 채널 0에서 -를 누른경우 채널이 변하지 않고, 채널은 무한대로 있음
  // 이동하려는 N채널까지 어떤 버튼이 고장났는지 주어졌을 때 버튼을 최소 몇 번 눌러야하는지

  // 현재 보고 있는 채널은 100번
  const n = input.shift();
  const nArr = n.split("").map((n) => +n);

  const btnCnt = +input.shift();
  const btns = input
    .shift()
    .split(" ")
    .map((n) => +n);

  // 5457
  let defaultLen = +n - 100;
  // 100번에서 target으로 가는 기본방법

  //7개를 자유롭게 써서 5467에 제일 가까운 수를 만들자
  const arr = [];
  for (let num = 0; num < 10; num++) {
    if (btns.indexOf(num) == -1) arr.push(num);
  }

  // 0 1 2 3 4 5 9
  //내가 사용가능한 숫자배열

  let totalArr = [];
  //[5,4,6,7]
  for (let a of nArr) {
    let diffArr = [];
    for (let b of arr) {
      diffArr.push([Math.abs(a - b), b]);
    }
    diffArr.sort((a, b) => a[0] - b[0]);
    totalArr.push(diffArr[0][1]);
  }
  let sub = 0;
  for (let i = 0; i < totalArr.length; i++) {
    if (totalArr[i] == 0) sub++;
    else break;
  }
  let total = +totalArr.join(""); // 00321
  //그 차이를 더한값 = target으로 가는 최단 방법
  let len = Math.abs(total - +n) + (totalArr.length - sub);
  if (defaultLen > len) console.log(len);
  else console.log(defaultLen);
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
