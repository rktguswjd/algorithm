const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const heapSort = (input) => {
  input.unshift("-");
  const arr = [];
  let n = input.length - 1;
  for (let i = 0; i < n; i++) {
    maxHeapify(input);
    let rootNode = input[1];
    input[1] = input[input.length - 1];
    input[input.length - 1] = rootNode;
    arr.push(input.pop());
  }

  let result = "";
  for (let e of arr) {
    result += e;
  }
  console.log(result);
};

const maxHeapify = (input) => {
  const n = Math.floor((input.length - 1) / 2);
  for (let i = n; i >= 1; i--) {
    let max = -99;
    let idx = -1;
    if (i == n && input.length % 2 != 0) {
      if (input[i * 2] > input[i]) {
        let temp = input[i];
        input[i] = input[i * 2];
        input[i * 2] = temp;
      }
      continue;
    }
    if (input[i * 2] > input[i * 2 + 1]) {
      max = input[i * 2];
      idx = i * 2;
    } else {
      max = input[i * 2 + 1];
      idx = i * 2 + 1;
    }
    if (max < input[i]) {
      continue;
    }

    let temp = input[i];
    input[i] = max;
    input[idx] = temp;
  }
};

const solution = (input) => {
  heapSort(input);
};

const input = [];
const main = (rl) => {
  rl.on("line", (line) => {
    input.push(parseInt(line));
  }).on("close", () => {
    solution(input);
    process.exit();
  });
};

main(rl);
