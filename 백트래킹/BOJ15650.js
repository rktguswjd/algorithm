const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require("constants");
const { copyFileSync } = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let n = 0;
let m = 0;
const solution = (line) => {
  const arr = line.split(" ").map((n) => +n);
  n = arr[0];
  m = arr[1];

  const numArr = new Array(n).fill(0);
  for (let i = 0; i < numArr.length; i++) {
    numArr[i] = i + 1;
  }

  const visited = new Array(n + 1).fill(false);
  backtracking([], numArr, visited);
  let set = new Set();
  for (let i = 0; i < ans.length; i++) {
    let str = ans[i].split(" ").map((n) => +n);
    str.sort((a, b) => a - b);
    set.add(str.join(" "));
  }

  const res = [...set];
  console.log(res.join("\n"));
};

const ans = [];
const backtracking = (pickedArr, numArr, visited) => {
  if (pickedArr.length === m) {
    ans.push(pickedArr.join(" "));
    return;
  }

  for (let i = 0; i < n; i++) {
    if (visited[i] === true) continue;
    visited[i] = true;
    pickedArr.push(numArr[i]);
    backtracking(pickedArr, numArr, visited);
    pickedArr.pop();
    visited[i] = false;
  }
};

const main = (rl) => {
  rl.on("line", (line) => {
    solution(line);
  }).on("close", () => {
    process.exit();
  });
};

main(rl);
