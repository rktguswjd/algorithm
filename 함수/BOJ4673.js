const arr = new Array(10001).fill(0);

const D = (n) => {
  let str = "" + n;
  let arr1 = str.split("");
  let sum = arr1.reduce((a, b) => +a + +b, 0);
  let num = n + sum;
  if (num <= 10000) arr[num]++;
};

const solution = () => {
  for (let i = 1; i < 10000; i++) {
    D(i);
  }
  for (let i = 1; i <= 10000; i++) {
    if (arr[i] !== 0) continue;
    console.log(i);
  }
};

solution();
