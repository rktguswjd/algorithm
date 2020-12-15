const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (N) => {
  let str = "";
  for (let i = N; i > 0; i--) {
    for (let j = i; j > 0; j--) {
      str += "*";
    }
    str += "\n";
  }

  console.log(str);
};

const main = (rl) => {
  rl.on("line", (line) => {
    solution(+line);
  }).on("close", () => {
    process.exit();
  });
};

main(rl);
