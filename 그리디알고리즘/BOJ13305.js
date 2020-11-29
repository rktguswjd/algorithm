const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const N = Number(input[0]);
  const distances = input[1].split(" ").map((num) => Number(num));
  const city = input[2].split(" ").map((num) => Number(num));

  let startCity = city[0];
  let lenSum = 0;
  let cost = 0;
  for (let i = 1; i < N; i++) {
    let nextCity = city[i];
    lenSum += distances[i - 1];
    if (nextCity > startCity) continue;
    cost += startCity * lenSum;
    lenSum = 0;
    startCity = nextCity;
  }
  if (lenSum != 0) cost += start * lenSum;
  console.log(cost);
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
