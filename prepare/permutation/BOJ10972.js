const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  // 1부터 N까지의 수로 이루어진 순열 중 사전순으로 다음에 오는 순열을 구하라
  // 사전 순으로 가장 앞서는 순열은 오름차순으로 이루어진 순열이고, 가장 마지막에 오는 순열은 내림차순으로 이루어진 순열이다
  // 첫째 줄에 입력으로 주어진 순열의 다음에 오는 순열을 출력한다. 만약, 사전순으로 마지막에 오는 순열인 경우에는 -1을 출력한다.
  //
  // 백트래킹으로 풀면 런타임 에러 남 (스택사이즈)
  // C++의 next_permutation과 같은 알고리즘을 통해 구해야함
  //
  // 1. 순열을 뒤에서 부터 앞으로 확인하면서 arr[i-1] < arr[i]인 곳을 찾는다.
  // 2. 만약 모든 숫자를 확인했을 때 위의 조건을 만족하지 않으면 마지막 순열이라는 뜻이므로 -1를 출력하고 종료한다.
  // 3. 1의 조건을 만족하는 지점(j)이 있다면 그 j를 기준으로 순열 두 덩이로 나눈다.
  // 4. [j-n]덩어리에서 뒤에서부터 확인하면서  arr[j-1]보다 큰 숫자를 찾아 arr[j-1]과 스왑해준다.
  // 5. 스왑 후 구간 [j~n]을 오름차순으로 정렬해준다.
  // 6. 출력

  let n = +input.shift();
  let permutation = input
    .shift()
    .split(" ")
    .map((n) => +n);

  let idx = -1;
  // 순열 뒤에서부터 앞으로 확인하면서 arr[i-1] < arr[i]인 곳 찾기
  for (let i = n - 1; i > 0; i--) {
    if (permutation[i - 1] < permutation[i]) {
      idx = i;
      break;
    }
  }

  // 만약 모든 숫자가 arr[i-1] < arr[i]을 만족하지 않는다면 마지막 순열이라는 뜻
  if (idx == -1) {
    console.log(-1);
    return;
  }

  // idx부터 n까지 뒤에서부터 확인하면서 arr[idx-1] < arr[i]을 찾아 둘이 스왑
  for (let i = n - 1; i >= idx; i--) {
    if (permutation[idx - 1] < permutation[i]) {
      let temp = permutation[idx - 1];
      permutation[idx - 1] = permutation[i];
      permutation[i] = temp;
      break;
    }
  }

  // swap후에 idx부터 n까지 오름차순으로 정렬
  const permuArr1 = permutation.slice(0, idx);
  const permuArr2 = permutation.slice(idx, n);
  permuArr2.sort((a, b) => a - b);

  // 출력
  console.log(permuArr1.concat(permuArr2).join(" "));
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
