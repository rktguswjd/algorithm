const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (N) => {
  let i = 665;
  let count = 0;
  let str = "";
  while (count != N) {
    str = String(i);
    if (str.indexOf("666") != -1) {
      count++;
    }
    i++;
  }

  console.log(str);
};

const main = (rl) => {
  rl.on("line", (line) => {
    solution(line);
  }).on("close", () => {
    process.exit();
  });
};

main(rl);
