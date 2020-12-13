const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const N = +input[0];
  input.shift();

  for (let i = 0; i < N; i++) {
    input[i] = input[i].split(" ").map((num) => +num);
  }
  let result = "";
  for (let i = 0; i < N; i++) {
    let count = 0;
    for (let j = 0; j < N; j++) {
      if (i == j) continue;
      if (checkBulk(input[i], input[j])) count++;
    }
    result += count + 1 + " ";
  }
  console.log(result);
};
const checkBulk = (person, nextPerson) => {
  if (person[0] < nextPerson[0] && person[1] < nextPerson[1]) return true;
  return false;
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
