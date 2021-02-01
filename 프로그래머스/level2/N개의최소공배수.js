function solution(arr) {
  let ans = 1;
  for (let i = 0; i < arr.length; i++) {
    ans = lcm(ans, arr[i]);
  }

  console.log(ans);
}

const gcd = (a, b) => {
  while (b > 0) {
    let r = b;
    b = a % b;
    a = r;
  }

  return a;
};

const lcm = (a, b) => {
  return (a * b) / gcd(a, b);
};

const arr = [2, 6, 8, 14];
solution(arr);
