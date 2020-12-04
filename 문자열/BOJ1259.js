const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  input.pop();
  let result = "";
  for (let i = 0; i < input.length; i++) {
    let flag = true;
    const arr = input[i].split("");
    const arrReverse = [...arr];
    arrReverse.reverse();
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] == arrReverse[j]) continue;
      else {
        flag = false;
        break;
      }
    }

    if (flag == true) {
      result += "yes\n";
    } else {
      result += "no\n";
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
