const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// 두 홀수 소수
// n을 만드는 a b
// 3 ~ n/2
const c = 1000000;
const primeArr = new Array(1000001).fill(true);
const solution = (input) => {
  let ans = "";
  primeArr[1] = false;
  for (let i = 2; i <= c; i++) {
    if (primeArr[i]) {
      for (let j = 2; i * j <= c; j++) {
        primeArr[i * j] = false;
      }
    }
  }

  while (true) {
    let n = +input.shift();
    if (n == 0) break;
    for (let i = 3; i <= Math.floor(n / 2); i += 2) {
      if (primeArr[i]) {
        if (primeArr[n - i] && (n - i) % 2 != 0) {
          ans += n + " = " + i + " + " + (n - i) + "\n";
          break;
        }
      }
    }
  }

  console.log(ans);
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
