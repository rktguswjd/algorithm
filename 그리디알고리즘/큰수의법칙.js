const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 다양한 수로 이루어진 배열이 있을 때 주어진 수들을 M번 더하여 가장 큰 수를 만드는 법칙
// 단, 배열의 특정한 인덱스에 해당하는 수가 연속해서 K번을 초과하여 더해질 수 없는 것이 이 법칙의 특성
const solution = (input) => {
  const temp = input
    .shift()
    .split(" ")
    .map((n) => +n);
  const n = temp[0];
  const m = temp[1];
  const k = temp[2];
  let cnt = 0;
  let sum = 0;
  const numArr = input
    .shift()
    .split(" ")
    .map((n) => +n);
  numArr.sort((a, b) => a - b);

  const first = numArr[n - 1];
  const second = numArr[n - 2];

  while (true) {
    for (let i = 0; i < k; i++) {
      if (cnt >= m) break;
      sum += first;
      cnt++;
    }
    if (cnt >= m) break;
    sum += second;
    cnt++;
  }

  console.log(sum);

  // M의 크기가 100억 이상처럼 커진다면? -> 위 방법은 시간 초과 판정

  // 반복되는 수열에 대해서 파악
  // 가장 큰 수와 두 번째로 큰 수가 더해질 때는 특정한 수열 형태로 반복해서 더해지는 특징 존재 {6,6,6,5}
  // 그렇다면 반복되는 수열의 길이는 K+1
  // 따라서 M을 (K+1)로 나눈 몫이 수열이 반복되는 횟수, 여기에 K를 곱해주면 가장 큰 수가 등장하는 횟수

  // M이 (K+1)로 나누어떨어지지 않는 경우 -> M을 (K+1)로 나눈 나머지만큼 가장 큰 수가 추가로 더해진다.

  /*
    let cnt = Math.floor(m/(k+1))*k
    cnt += m%(k+1)

    sum+= cnt * first
    sum+= (m - cnt) * second
  */
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
