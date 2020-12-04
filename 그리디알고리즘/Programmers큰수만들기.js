function solution(number, k) {
  const answer = [];
  let strCount = 0;
  let start = 0;
  let strEndPos = number.length - 1;
  let count = number.length - k;
  while (strCount < number.length - k) {
    let max = -1;
    let maxIdx = -1;
    for (let i = start; i <= strEndPos - count + 1; i++) {
      if (max < +number.charAt(i)) {
        max = +number.charAt(i);
        maxIdx = i;
      }
    }
    answer.push(max);
    start = maxIdx + 1;
    strCount++;
    count--;
  }

  console.log(answer.join(""));
}

const number = "4177252841";
const k = 4;

solution(number, k);
