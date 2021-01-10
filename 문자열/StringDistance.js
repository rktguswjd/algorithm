const solution = (a, b) => {
  let aLen = a.length;
  let bLen = b.length;
  const dp = Array.from(Array(aLen + 1), () => Array(bLen + 1).fill(0));
  let temp = 0;
  for (let i = 0; i <= bLen; i++) {
    dp[0][i] = temp++;
  }
  temp = 0;
  for (let i = 0; i <= aLen; i++) {
    dp[i][0] = temp++;
  }
  for (let i = 1; i <= aLen; i++) {
    for (let j = 1; j <= bLen; j++) {
      if (a.charAt(i - 1) == b.charAt(j - 1))
        dp[i][j] = Math.min(
          dp[i - 1][j] + 1,
          dp[i][j - 1] + 1,
          dp[i - 1][j - 1]
        );
      else
        dp[i][j] = Math.min(
          dp[i - 1][j] + 1,
          dp[i][j - 1] + 1,
          dp[i - 1][j - 1] + 1
        );
    }
  }
  console.log(dp);
  console.log(dp[aLen][bLen]);
};

solution("abc", "abcd");
