const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const n = +input.shift();
  const switchArr = input
    .shift()
    .split(" ")
    .map((n) => +n);

  switchArr.unshift(-1);

  const studentNum = +input.shift();
  for (let i = 0; i < studentNum; i++) {
    const sArr = input[i].split(" ").map((n) => +n);
    const sex = sArr[0];
    const switchNum = sArr[1];

    if (sex === 1) {
      // 남성일 때
      let j = 1;
      while (switchNum * j < n + 1) {
        if (switchArr[switchNum * j] === 0) switchArr[switchNum * j] = 1;
        else switchArr[switchNum * j] = 0;
        j++;
      }
    } else {
      // 여성일 때
      // 자신의 스위치 중심으로 좌우 대칭이 되는 구간까지 속한 스위치 모두 바꾸거나
      // 좌우 대칭이 되지 않는 구간이거나 번호가 끝나면 거기까지만

      // 먼저 자기자신 바꿔주기
      if (switchArr[switchNum] === 0) switchArr[switchNum] = 1;
      else switchArr[switchNum] = 0;

      let left = switchNum - 1;
      let right = switchNum + 1;

      while (left > 0 && right < n + 1) {
        if (switchArr[left] === switchArr[right]) {
          // 좌우가 같다면 바꿔주고 다음확인
          switchArr[left] =
            switchArr[left] === 0
              ? (switchArr[left] = 1)
              : (switchArr[left] = 0);

          switchArr[right] =
            switchArr[right] === 0
              ? (switchArr[right] = 1)
              : (switchArr[right] = 0);
          left--;
          right++;
        } else {
          // 좌우가 다르다면 나옴
          break;
        }
      }
    }
  }

  let res = "";
  for (let i = 1; i <= n; i++) {
    if (i % 20 === 0) res += switchArr[i] + "\n";
    else res += switchArr[i] + " ";
  }
  console.log(res);
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
