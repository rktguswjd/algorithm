const { count } = require("console");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (schedule) => {
  const NK = schedule[0].split(" ");
  const N = +NK[0];
  const K = +NK[1];
  schedule = schedule[1].split(" ");
  schedule = schedule.map((num) => Number(num));
  const plug = new Array(101);
  let result = 0;

  for (let i = 0; i < K; i++) {
    let pluggedIn = false;

    // 해당 기기가 꽂혀있는지
    for (let j = 0; j < N; j++) {
      if (plug[j] == schedule[i]) {
        pluggedIn = true;
        break;
      }
    }
    if (pluggedIn) continue;

    // 비어있는 구멍 확인
    for (let j = 0; j < N; j++) {
      if (!plug[j]) {
        plug[j] = schedule[i];
        pluggedIn = true;
        break;
      }
    }
    if (pluggedIn) continue;

    // 꽉차있을때
    // 단 한번도 쓰지 않을 기기를 빼거나 제일 마지막에 쓰일 기기 찾기
    // 나중에 다시 사용되거나 앞으로 사용하지 않을 기기 찾기
    let idx = 0,
      deviceIdx = -1;
    for (let j = 0; j < N; j++) {
      let lastIdx = 0;
      for (let k = i + 1; k < K; k++) {
        if (plug[j] == schedule[k]) break;
        lastIdx++;
      }

      if (lastIdx > deviceIdx) {
        idx = j;
        deviceIdx = lastIdx;
      }
    }
    result++;
    plug[idx] = schedule[i];
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
