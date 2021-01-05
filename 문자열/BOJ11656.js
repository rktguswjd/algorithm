const { access } = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (str) => {
  const N = str.length;
  let suffixArr = new Array(N);
  for (let i = 0; i < N; i++) {
    let word = "";
    for (let j = i; j < N; j++) {
      word += str.charAt(j);
    }
    suffixArr[i] = word;
  }

  suffixArr.sort();
  let result = "";
  for (let e of suffixArr) {
    result += e + "\n";
  }
  console.log(result);
};

const main = (rl) => {
  rl.on("line", (line) => {
    solution(line);
  }).on("close", () => {
    process.exit();
  });
};

main(rl);
