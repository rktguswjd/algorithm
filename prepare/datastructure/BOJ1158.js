const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  // 요세푸스
  // m-1번 동안 shift하고 push
  // m번째 저장
  // 큐가 빌때까지 반복

  const arr = input
    .shift()
    .split(" ")
    .map((n) => +n);
  const n = arr[0];
  const k = arr[1];

  const queue = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    queue[i] = i + 1;
  }

  const str = [];
  while (queue.length != 0) {
    for (let i = 1; i < k; i++) {
      queue.push(queue.shift());
    }
    str.push(queue.shift());
  }

  let ans = "<";
  for (let i = 0; i < str.length; i++) {
    if (i == str.length - 1) {
      ans += str[i] + ">";
    } else {
      ans += str[i] + ", ";
    }
  }
  console.log(ans);
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
