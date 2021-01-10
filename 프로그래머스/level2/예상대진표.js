function solution(n, a, b) {
  let count = 1;
  while (true) {
    if (check(a, b)) {
      break;
    }
    if (a % 2 == 0) {
      a = a / 2;
    } else {
      a = (a + 1) / 2;
    }

    if (b % 2 == 0) {
      b = b / 2;
    } else {
      b = (b + 1) / 2;
    }
    count++;
  }
  console.log(count);
}

const check = (a, b) => {
  if ((a + b) % 2 != 0) {
    if (a % 2 == 0) {
      if (b + 1 == a) return true;
    } else {
      if (a + 1 == b) return true;
    }
  }
  return false;
};

const n = 8;
let a = 1;
let b = 2;

solution(n, a, b);
