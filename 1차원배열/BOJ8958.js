const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getSum = (arr) => {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    let count = arr[i].length;
    result += (count * (count + 1)) / 2;
  }
  console.log(result);
};

const solution = (input) => {
  const n = +input[0];
  for (let i = 1; i <= n; i++) {
    const problem = input[i];
    //solve 1
    const arr = problem.split("X").filter((item) => item !== "");
    getSum(arr);
  }
  //     solve 2
  //     const arr = problem.split("");
  //     let count = 0;
  //     let result = 0;
  //     for (let e of arr) {
  //       if (e === "O") count++;
  //       else {
  //         result += (count * (count + 1)) / 2;
  //         count = 0;
  //       }
  //     }
  //     if (count > 0) result += (count * (count + 1)) / 2;
  //     console.log(result);
  //   }
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
