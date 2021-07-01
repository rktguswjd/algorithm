const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// 5
// 8 3 7 9 2
// 3
// 5 7 9

const solution = (input) => {
  const n = +input[0];
  const partArr = input[1].split(" ").map((n) => +n);
  const m = +input[2];
  const requestArr = input[3].split(" ").map((n) => +n);

  partArr.sort((a, b) => a - b);

  let result = "";
  for (let f = 0; f < m; f++) {
    let target = requestArr[f];
    result += binarySearch(partArr, target, 0, n - 1) + " ";
  }

  console.log(result);
};

const binarySearch = (partArr, target, start, end) => {
  if (start > end) return "no";
  let mid = Math.floor((start + end) / 2);

  if (partArr[mid] == target) return "yes";
  else if (partArr[mid] > target)
    return binarySearch(partArr, target, start, mid - 1);
  else return binarySearch(partArr, target, mid + 1, end);
};

const input = [];
const main = (rl) => {
  rl.on("line", (line) => {
    input.push(line);
  }).on("close", () => {
    solution(input);
    process.exit();
  });
};

main(rl);
