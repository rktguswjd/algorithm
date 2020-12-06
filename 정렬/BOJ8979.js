const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const nkArr = input[0].split(" ");
  input.shift();
  const N = +nkArr[0];
  const K = +nkArr[1];
  const country = [];
  for (let i = 0; i < N; i++) {
    country.push(input[i].split(" ").map((num) => +num));
  }

  country.sort((a, b) => {
    if (a[1] < b[1]) return 1;
    else if (a[1] == b[1]) {
      if (a[2] < b[2]) return 1;
      else if (a[2] == b[2]) {
        if (a[3] < b[3]) return 1;
      }
    }
    return -1;
  });

  let rank = 1;
  let start = 0;
  country[start].push(rank);
  let addCount = 1;
  while (start < N - 1) {
    let next = start + 1;
    let result = true;
    for (let i = 1; i < 4; i++) {
      if (country[start][i] != country[next][i]) {
        result = false;
        break;
      }
    }
    if (result) {
      country[next].push(rank);
      addCount++;
    } else {
      rank += addCount;
      country[next].push(rank);
      addCount = 1;
    }
    start++;
  }

  console.log(country.filter((e) => e[0] == K)[0][4]);
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
