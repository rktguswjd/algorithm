const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const s = input.shift();

  let result = "";
  let str = "";
  let flag = false;

  for (let i = 0; i < s.length; i++) {
    const nowS = s.charAt(i);
    if (nowS === "<") {
      if (str.length !== 0) {
        result += backwards(str);
        str = "";
      }
      flag = true;
      result += nowS;
      continue;
    }

    if (nowS === ">") {
      flag = false;
      result += nowS;
      continue;
    }

    if (flag) {
      result += nowS;
    } else {
      if (nowS === " ") {
        result += backwards(str) + " ";
        str = "";
      } else {
        str += nowS;
      }
    }
  }
  if (str.length !== 0) {
    str = backwards(str);
    result += str;
    str = "";
  }
  console.log(result);
};

const backwards = (str) => {
  let res = "";
  for (let i = str.length; i > -1; i--) {
    res += str.charAt(i);
  }
  return res;
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
