function solution(n, lost, reserve) {
  const countArr = new Array(n).fill(1);

  for (let idx of lost) {
    countArr[idx - 1]--;
  }
  for (let idx of reserve) {
    countArr[idx - 1]++;
  }

  for (let i = 0; i < n; i++) {
    if (countArr[i] != 2) continue;
    if (countArr[i - 1] != 0 && countArr[i + 1] != 0) continue;
    else {
      if (countArr[i - 1] == 0) {
        countArr[i - 1]++;
        countArr[i]--;
        continue;
      }
      countArr[i + 1]++;
      countArr[i]--;
    }
  }

  let answer = 0;
  for (let e of countArr) {
    if (e != 0) answer += 1;
  }
  return answer;
}

const n = 3;
const lost = [3];
const reserve = [1];

solution(n, lost, reserve);
