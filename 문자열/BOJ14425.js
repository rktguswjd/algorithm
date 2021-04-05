const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let ans = 0;
const solution = (input) => {
  const arr = input.shift().split(" ");
  const n = +arr[0];
  const m = +arr[1];

  let S = [];
  for (let i = 0; i < n; i++) {
    S.push(input[i]);
  }
  S.sort();
  for (let i = n; i < input.length; i++) {
    binarySearch(S, input[i]);
  }
  console.log(ans);
};
const binarySearch = (s, target) => {
  let start = 0;
  let end = s.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let compare = s[mid].localeCompare(target);
    if (compare < 0) {
      start = mid + 1;
    } else {
      if (compare == 0) {
        ans++;
        break;
      }
      end = mid - 1;
    }
  }
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
