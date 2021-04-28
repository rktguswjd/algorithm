// 문제 1. 키패드 누르기

const solution = (numbers, hand) => {
  const Keypad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["X", 0, "#"],
  ];

  let ans = "";
  let nowL = [3, 0];
  let nowR = [3, 2];
  let keyPos = [];

  for (let n = 0; n < numbers.length; n++) {
    let pos = numbers[n];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 3; j++) {
        if (pos == Keypad[i][j]) {
          keyPos = [i, j];
          break;
        }
      }
    }

    if (pos == 1 || pos == 4 || pos == 7) {
      // 왼쪽 열, 왼손
      ans += "L";
      nowL = keyPos;
    } else if (pos == 3 || pos == 6 || pos == 9) {
      // 오른쪽 열, 오른손
      ans += "R";
      nowR = keyPos;
    } else {
      // 왼손과 오른손 중 거리가 가까운
      let distL = Math.abs(nowL[0] - keyPos[0]) + Math.abs(nowL[1] - keyPos[1]);
      let distR = Math.abs(nowR[0] - keyPos[0]) + Math.abs(nowR[1] - keyPos[1]);

      if (distL < distR) {
        ans += "L";
        nowL = keyPos;
      } else if (distL > distR) {
        ans += "R";
        nowR = keyPos;
      } else {
        if (hand === "left") {
          ans += "L";
          nowL = keyPos;
        } else {
          ans += "R";
          nowR = keyPos;
        }
      }
    }
  }

  return ans;
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const hand = "right";

solution(numbers, hand);
