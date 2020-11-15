const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const n = input.shift();
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(input[i].split(" ").map((num) => Number(num)));
  }
  arr.sort((a, b) => {
    if (a[1] > b[1]) return 1;
    else if (a[1] == b[1]) {
      if (a[0] > b[0]) return 1;
    }
    return -1;
  });
  let end = arr[0][1];
  let count = 1;
  for (let idx = 1; idx < arr.length; idx++) {
    let temp = arr[idx][0];
    if (temp < end) continue;
    end = arr[idx][1];
    count++;
  }
  console.log(count);
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
