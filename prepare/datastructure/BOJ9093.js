const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const n = +input.shift();
  let result = "";
  for (let i = 0; i < n; i++) {
    input[i] = input[i].split(" ");
  }

  for (let i = 0; i < n; i++) {
    const str = input[i];
    for (let j = 0; j < str.length; j++) {
      const word = str[j];
      for (let w = word.length; w > -1; w--) {
        result += word.charAt(w);
      }
      result += " ";
    }
    result += "\n";
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
