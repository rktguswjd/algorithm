const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const str = input.shift();
  const alphabet = new Array(26).fill(-1);

  for (let i = 0; i < str.length; i++) {
    if (alphabet[str.charAt(i).charCodeAt() - 97] == -1)
      alphabet[str.charAt(i).charCodeAt() - 97] = i;
  }
  console.log(alphabet.join(" "));
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
