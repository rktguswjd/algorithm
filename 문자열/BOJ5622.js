const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const arr1 = new Array(26);
  let start = 3;
  for (let i = 0; i < arr1.length; i++) {
    if (i < 15) arr1[i] = start + Math.floor(i / 3);
    else if (15 <= i && i < 19) arr1[i] = 8;
    else if (19 <= i && i < 22) arr1[i] = 9;
    else arr1[i] = 10;
  }

  const arr = input.split("");
  let sum = 0;

  for (let e of arr) {
    let add = arr1[e.charCodeAt() - 65];
    sum += add;
  }

  console.log(sum);
};

const main = (rl) => {
  rl.on("line", (line) => {
    solution(line);
  }).on("close", () => {
    process.exit();
  });
};

main(rl);
