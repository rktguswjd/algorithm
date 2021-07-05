function solution(absolutes, signs) {
  let sum = 0;
  for (let i = 0; i < absolutes.length; i++) {
    const num = absolutes[i];
    const sign = signs[i];
    if (!sign) {
      sum -= num;
    } else {
      sum += num;
    }
  }
  console.log(sum);
}
const absolutes = [4, 7, 12];
const signs = [true, false, true];
solution(absolutes, signs);
