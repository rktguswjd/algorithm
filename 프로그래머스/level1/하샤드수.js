function solution(x) {
  let xStr = x + "";
  let arr = xStr.split("").map((n) => +n);
  let sum = 0;
  for (let e of arr) {
    sum += e;
  }

  if (x % sum == 0) return true;
  else return false;
}

let x = 10;
solution(x);
