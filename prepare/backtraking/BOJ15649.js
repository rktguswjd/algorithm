const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let n;
let m;
const solution = (input) => {
  // N과M (1)
  // 길이가 M인 수열을 모두 구하라
  // 1부터 N까지 자연수 중 중복 없이 M개를 고른 수열
  // 수열은 사전 순으로 증가하는 순서로 출력
  const inputArr = input.shift().split(" ");
  n = +inputArr[0];
  m = +inputArr[1];

  const nArr = new Array(n + 1).fill(0);
  const visit = new Array(n + 1).fill(false);
  for (let i = 1; i <= n; i++) {
    nArr[i] = i;
  }

  backtraking(nArr, [], visit);

  console.log([...set].join("\n"));
};
const set = new Set();
const backtraking = (nArr, pick, visit) => {
  if (pick.length == m) {
    set.add(pick.join(" "));
    return;
  }

  for (let i = 1; i < nArr.length; i++) {
    if (visit[i]) continue;
    visit[i] = true;
    pick.push(nArr[i]);
    backtraking(nArr, pick, visit);
    pick.pop();
    visit[i] = false;
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
