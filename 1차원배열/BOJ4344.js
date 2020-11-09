const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const c = input[0];
  let avg = 0;
  for (let i = 1; i <= c; i++) {
    const arr = input[i].split(" ");
    arr.shift();
    avg = arr.reduce((a, b) => +a + +b, 0) / arr.length;
    let count = 0;
    for (let e of arr) {
      if (avg < e) count++;
    }
    let result = (count / arr.length) * 100;
    console.log(result.toFixed(3) + "%");
  }
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
