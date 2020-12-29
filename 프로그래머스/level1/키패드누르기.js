function solution(numbers, hand) {
  const keyPad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["*", 0, "#"],
  ];
  let result = "";
  let left = "*";
  let right = "#";
  for (let i = 0; i < numbers.length; i++) {
    let pos = numbers[i];
    if (pos == 1 || pos == 4 || pos == 7) {
      // 왼손만
      left = pos;
      result += "L";
    } else if (pos == 3 || pos == 6 || pos == 9) {
      // 오른손만
      right = pos;
      result += "R";
    } else {
      // 가운데 패드
      let locP = [0, 0];
      let locL = [0, 0];
      let locR = [0, 0];
      // 좌표구하기
      for (let j = 0; j < 4; j++) {
        for (let k = 0; k < 3; k++) {
          if (pos === keyPad[j][k]) {
            locP[0] = j;
            locP[1] = k;
          }
          if (left === keyPad[j][k]) {
            locL[0] = j;
            locL[1] = k;
          }
          if (right === keyPad[j][k]) {
            locR[0] = j;
            locR[1] = k;
          }
        }
      }

      // 거리계산
      let diffL = Math.abs(locL[0] - locP[0]) + Math.abs(locL[1] - locP[1]);
      let diffR = Math.abs(locR[0] - locP[0]) + Math.abs(locR[1] - locP[1]);

      if (diffL == diffR) {
        if (hand == "left") {
          left = pos;
          result += "L";
        } else {
          right = pos;
          result += "R";
        }
      } else if (diffL < diffR) {
        left = pos;
        result += "L";
      } else {
        right = pos;
        result += "R";
      }
    }
  }
  console.log(result);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const hand = "right";

solution(numbers, hand);
