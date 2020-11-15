const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const n = input.shift();
  const ageArr = [];
  for (let i = 0; i < 201; i++) {
    ageArr[i] = [];
  }
  for (let e of input) {
    const arr = e.split(" ");
    ageArr[arr[0]].push(arr[1]);
  }
  let result = "";
  for (let i = 0; i < ageArr.length; i++) {
    if (ageArr[i].length == 0) continue;
    for (let j = 0; j < ageArr[i].length; j++) {
      result += i + " " + ageArr[i][j] + "\n";
    }
  }
  console.log(result);
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
