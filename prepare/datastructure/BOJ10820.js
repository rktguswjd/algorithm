const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  let result = "";
  for (let i = 0; i < input.length; i++) {
    const str = input[i];
    const cntArr = new Array(4).fill(0);
    for (let j = 0; j < str.length; j++) {
      //  소문자 대문자 숫자 공백
      const char = str.charAt(j);
      if (
        "a".charCodeAt() <= char.charCodeAt() &&
        char.charCodeAt() <= "z".charCodeAt()
      ) {
        cntArr[0]++;
        continue;
      }

      if (
        "A".charCodeAt() <= char.charCodeAt() &&
        char.charCodeAt() <= "Z".charCodeAt()
      ) {
        cntArr[1]++;
        continue;
      }

      if (char === " ") {
        cntArr[3]++;
        continue;
      }

      if (!isNaN(char)) {
        cntArr[2]++;
      }
    }
    result += cntArr.join(" ") + "\n";
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
