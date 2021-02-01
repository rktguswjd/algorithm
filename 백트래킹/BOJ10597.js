const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = 0;
const ans = [];
const solution = (input) => {
  const len = input.length;
  if (len > 9) {
    n = 9;
    let temp = (len - 9) / 2;
    for (let i = 0; i < temp; i++) {
      n++;
    }
  } else {
    n = len;
  }
  const visited = new Array(n + 1).fill(false);

  backtracking([], input, visited, -1);
  console.log(ans[0]);
};

const backtracking = (pickedArr, input, visited, start) => {
  if (pickedArr.length == n) {
    ans.push(pickedArr.join(" "));
    return;
  }
  // 1개
  let pick = +input.substring(start + 1, start + 2);
  if (pick <= n && visited[pick] != true && pick > 0) {
    visited[pick] = true;
    pickedArr.push(pick);
    backtracking(pickedArr, input, visited, start + 1);
    pickedArr.pop();
    visited[pick] = false;
  }

  // 2개
  let twoPick = +input.substring(start + 1, start + 3);
  if (twoPick >= 10 && twoPick <= n && visited[twoPick] != true) {
    visited[twoPick] = true;
    pickedArr.push(twoPick);
    backtracking(pickedArr, input, visited, start + 2);
    pickedArr.pop();
    visited[twoPick] = false;
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
