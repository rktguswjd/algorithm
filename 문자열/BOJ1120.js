const { access } = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (str) => {
  const arr = str.split(" ");
  const A = arr[0];
  const B = arr[1];
  let result = A.length;
  for (let i = 0; i <= B.length - A.length; i++) {
    let diffCount = 0;
    for (let j = 0; j < A.length; j++) {
      if (A.charAt(j) !== B.charAt(j + i)) {
        diffCount++;
      }
    }
    if (result > diffCount) {
      result = diffCount;
    }
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
