const { count } = require("console");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (N) => {
  if (N % 5 == 0) {
    console.log(N / 5);
  } else {
    let count5 = Math.floor(N / 5);
    let remainder = N % 5;
    if (remainder % 3 == 0) console.log(count5 + remainder / 3);
    else {
      let flag = false;
      while (count5 > 0) {
        count5--;
        remainder += 5;
        if (remainder % 3 == 0) {
          flag = true;
          console.log(count5 + remainder / 3);
          break;
        }
      }
      if (flag == false) console.log(-1);
    }
  }
};

const main = (rl) => {
  rl.on("line", (line) => {
    solution(Number(line));
  }).on("close", () => {
    process.exit();
  });
};

main(rl);
