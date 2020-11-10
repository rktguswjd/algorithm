const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (str) => {
  const result = new Array(26).fill(-1);
  const set = new Set(str.split(""));
  const arr = [...set];
  for (let e of arr) {
    let idx = str.indexOf(e);
    result[e.charCodeAt() - "a".charCodeAt()] = idx;
  }
  let resultStr = "";
  for (let i of result) {
    resultStr += i + " ";
  }
  console.log(resultStr);
};

const main = (rl) => {
  rl.on("line", (line) => {
    solution(line);
  }).on("close", () => {
    process.exit();
  });
};
main(rl);
