const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (str) => {
  let flag = true;
  let res = "";
  let wordStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === "<") {
      if (wordStr.length != 0) {
        let arr = wordStr.split("");
        arr.reverse();
        res += arr.join("");
        wordStr = "";
      }
      res += str.charAt(i);
      flag = false;
      continue;
    }
    if (str.charAt(i) === ">") {
      res += str.charAt(i);
      flag = true;
      continue;
    }

    if (flag) {
      if (str.charAt(i) === " ") {
        let arr = wordStr.split("");
        arr.reverse();
        res += arr.join("");
        res += str.charAt(i);
        wordStr = "";
      } else {
        wordStr += str.charAt(i);
      }
    } else {
      res += str.charAt(i);
    }
  }
  if (wordStr.length != 0) {
    let arr = wordStr.split("");
    arr.reverse();
    res += arr.join("");
  }
  console.log(res);
};

const main = (rl) => {
  rl.on("line", (line) => {
    solution(line);
  }).on("close", () => {
    process.exit();
  });
};

main(rl);
