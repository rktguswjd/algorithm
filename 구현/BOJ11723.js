const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const M = +input[0];
  let S = new Array(21).fill(0);
  let result = "";
  for (let i = 1; i <= M; i++) {
    let arr = input[i].split(" ");
    let command = arr[0];
    let X = +arr[1];
    switch (command) {
      case "add":
        S[X] = 1;
        break;

      case "remove":
        if (S[X] == 1) S[X] = 0;
        break;

      case "check":
        if (S[X] == 1) result += 1;
        else result += 0;
        result += "\n";
        break;

      case "toggle":
        if (S[X] == 1) S[X] = 0;
        else S[X] = 1;
        break;

      case "all":
        for (let i = 0; i < 21; i++) S[i] = 1;
        break;

      case "empty":
        for (let i = 0; i < 21; i++) S[i] = 0;
        break;
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
