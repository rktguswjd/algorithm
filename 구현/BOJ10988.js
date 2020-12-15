const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  input = input.split("");
  const reverse = [...input];
  reverse.reverse();
  let flag = true;
  for (let i = 0; i < input.length; i++) {
    if (input[i] != reverse[i]) {
      flag = false;
      break;
    }
  }

  if (flag == true) {
    console.log(1);
  } else {
    console.log(0);
  }
};

const main = (rl) => {
  rl.on("line", (line) => {
    solution(line);
  }).on("close", () => {
    process.exit();
  });
};

main(rl);
