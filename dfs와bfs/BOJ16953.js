const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let a = 0;
let b = 0;
const solution = (line) => {
  const arr = line.split(" ").map((n) => +n);
  a = arr[0];
  b = arr[1];
  let sum = a;
  let flag = dfs(0, sum);
  if (flag === true) {
    console.log(min + 1);
  } else {
    console.log(-1);
  }
};
let min = 1000000000;
const dfs = (count, sum) => {
  if (sum > b) return false;
  if (sum === b) {
    if (min > count) min = count;
    return true;
  }

  for (let i = 0; i < 2; i++) {
    let nextS = 0;
    if (i === 0) nextS = Number(sum + "" + "1");
    else nextS = sum * 2;
    if (dfs(count + 1, nextS)) return true;
  }
  return false;
};

const main = (rl) => {
  rl.on("line", (line) => {
    solution(line);
  }).on("close", () => {
    process.exit();
  });
};

main(rl);
