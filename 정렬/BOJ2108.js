const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const arithmeticMean = (n, input) => {
  let sum = 0;
  for (let e of input) {
    sum += e;
  }
  return (sum / n).toFixed(0);
};

const median = (n, input) => {
  const arr = [...input];
  arr.sort((a, b) => a - b);
  return arr[Math.floor(n / 2)];
};

const mode = (input) => {
  const arr = [...input];
  const countArr = Array.from(Array(8001), () => Array(2).fill(0));
  for (let e of arr) {
    countArr[e + 4000][0] = e;
    countArr[e + 4000][1]++;
  }
  countArr.sort((a, b) => a[1] - b[1]);
  let length = countArr.length;
  let maxCount = countArr[length - 1][1];

  const resultArr = [];
  resultArr.push(countArr[length - 1]);
  let pos = 1;
  while (maxCount == countArr[length - 1 - pos][1]) {
    resultArr.push(countArr[length - 1 - pos]);
    pos++;
  }
  resultArr.sort((a, b) => a[0] - b[0]);
  if (resultArr.length > 1) {
    return resultArr[1][0];
  }
  return resultArr[0][0];
};

const range = (n, input) => {
  const arr = [...input];
  arr.sort((a, b) => a - b);
  if (n == 1) {
    return 0;
  } else {
    const rangeNum = arr[0] - arr[n - 1];
    if (rangeNum < 0) {
      return rangeNum * -1;
    }
    return rangeNum;
  }
};
const solution = (input) => {
  const n = input[0];
  input.splice(0, 1);
  const testCase1 = arithmeticMean(n, input);
  const testCase2 = median(n, input);
  const testCase3 = mode(input);
  const testCase4 = range(n, input);
  console.log(testCase1);
  console.log(testCase2);
  console.log(testCase3);
  console.log(testCase4);
};

const input = [];
const main = (rl) => {
  rl.on("line", (line) => {
    input.push(Number(line));
  }).on("close", () => {
    solution(input);
    process.exit();
  });
};

main(rl);
