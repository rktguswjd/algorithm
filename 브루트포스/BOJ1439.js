const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const S = input.split("").map((num) => +num);
  let count1 = 0;
  let count0 = 0;
  let start = S[0];
  if (start == 0) count0++;
  else count1++;

  for (let i = 1; i < S.length; i++) {
    if (start == S[i]) {
      start = S[i];
      continue;
    } else {
      start = S[i];
      if (start == 0) count0++;
      else count1++;
    }
  }

  if (count0 > count1) console.log(count1);
  else console.log(count0);
};

const main = (rl) => {
  rl.on("line", (line) => {
    solution(line);
  }).on("close", () => {
    process.exit();
  });
};

main(rl);
