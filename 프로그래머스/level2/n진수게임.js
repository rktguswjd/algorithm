function solution(n, t, m, p) {
  let str = "";
  let ans = "";
  for (let i = 0; i < m * t; i++) {
    str += change(i, n);
  }

  let count = 0;
  let pos = p - 1;
  while (count < t) {
    ans += str.charAt(pos);
    count++;
    pos += m;
  }
  // 0 m 2m 3m 4m
  console.log(ans);
}

const change = (num, n) => {
  let ans = "";
  let remainder = 0;
  if (num === 0) return 0;
  while (num !== 0) {
    remainder = num % n;
    console.log(remainder);
    if (remainder < 10) {
      ans = remainder + ans;
    } else {
      ans = String.fromCharCode(remainder + 55) + ans;
    }
    num = parseInt(num / n);
  }
  return ans;
};

const n = 16; // 진법
const t = 16; // 출력 자리수
const m = 2; // 인원수
const p = 2; // 순서
solution(n, t, m, p);
