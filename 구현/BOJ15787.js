const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const arr = input.shift().split(" ");
  const n = +arr[0];
  const m = +arr[1];
  for (let i = 0; i < m; i++) {
    input[i] = input[i].split(" ").map((n) => +n);
  }

  const train = Array.from(Array(n), () => Array(20).fill(0));

  for (let i = 0; i < m; i++) {
    const commN = input[i][0];
    const commI = input[i][1] - 1;
    switch (commN) {
      case 1:
        // 1 i x
        // i번째 기차에 x번째 좌석에 사람태우기
        // 이미 사람이 있다면 아무런 행동 x
        if (train[commI][input[i][2] - 1] === 0)
          train[commI][input[i][2] - 1] = 1;
        break;

      case 2:
        // 2 i x
        // i번째 기차에 x번째 좌석에 앉은 사람 하차
        // 아무도 없다면 아무런 행동 x
        if (train[commI][input[i][2] - 1] === 1)
          train[commI][input[i][2] - 1] = 0;
        break;

      case 3:
        // 3 i
        // i번째 기차에 앉아 있는 승객들 모두 한칸씩 뒤로
        // k번째 사람 k+1로
        // 20번째 자리에 앉은 사람 있으면 하차
        // console.log(train[commI].join(""));
        const temp3Train = new Array(20).fill(0);
        for (let k = 0; k < 19; k++) {
          temp3Train[k + 1] = train[commI][k];
        }
        train[commI] = temp3Train;
        // console.log(train[commI].join(""));
        break;

      case 4:
        // 4 i
        // i번째 기차에 앉아 있는 승객들 모두 한칸씩 앞으로
        // 20번째 자리에 앉은 사람 있으면 하차
        const temp4Train = new Array(20).fill(0);
        for (let k = 1; k < 20; k++) {
          temp4Train[k - 1] = train[commI][k];
        }
        train[commI] = temp4Train;
        break;
    }
  }

  let strArr = [train[0].join("")];
  for (let i = 1; i < n; i++) {
    let nowStr = train[i].join("");
    let flag = false;

    for (let j = 0; j < strArr.length; j++) {
      if (nowStr === strArr[j]) {
        flag = true;
        break;
      }
    }
    if (flag === false) strArr.push(nowStr);
  }
  console.log(strArr.length);
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
