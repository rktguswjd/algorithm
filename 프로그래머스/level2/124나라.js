function solution(n) {
  const numbers = ["4", "1", "2"];
  let ans = "";
  let num = n;
  while (num != 0) {
    let remainder = num % 3;
    num = parseInt(num / 3);

    if (remainder == 0) num--;
    ans = numbers[remainder] + ans;
  }
  console.log(ans);
}
const n = 5;
solution(n);
