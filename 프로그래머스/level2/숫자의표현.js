function solution(n) {
  let ans = 1;

  for (let i = 1; i <= n; i++) {
    let sum = i;
    for (let j = i + 1; j <= n; j++) {
      sum += j;
      if (sum === n) {
        ans++;
        break;
      }
      if (sum > n) break;
    }
  }
  console.log(ans);
}

const n = 15;
solution(n);
