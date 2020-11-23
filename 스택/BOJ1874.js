const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// const solution = (input) => {
//   const n = input.shift();
//   const stack = [];
//   let result = "";
//   let start = 1;

//   for (let i = 0; i < n; i++) {
//     if (start > n) {
//       for (let j = i; j < n; j++) {
//         if (input[j] == stack[stack.length - 1]) {
//           stack.pop();
//           result += "-\n";
//           continue;
//         }
//         result = "NO";
//         break;
//       }
//       break;
//     }
//     if (start <= input[i]) {
//       for (let j = start; j <= input[i]; j++) {
//         stack.push(j);
//         result += "+\n";
//         if (j == input[i]) {
//           stack.pop();
//           result += "-\n";
//         }
//       }
//       start = input[i] + 1;
//       continue;
//     }

//     if (start > input[i]) {
//       stack.pop();
//       result += "-\n";
//     }
//   }

//   console.log(result);
// };
const solution1 = (input) => {
  const n = input.shift();
  const stack = [];
  let result = "";
  let start = 1;

  let pos = 0;
  let flag = true;
  while (start <= n) {
    if (!flag) break;
    let temp = input[pos];
    if (start <= temp) {
      for (let i = start; i <= temp; i++) {
        stack.push(i);
        result += "+\n";
      }
      start = stack.pop() + 1;
      result += "-\n";
    } else {
      let temp2 = stack.pop();
      if (temp2 != temp) {
        flag = false;
      } else result += "-\n";
    }
    pos++;
  }
  if (flag) {
    for (let i = pos; i < n; i++) {
      if (stack.pop() == input[i]) {
        result += "-\n";
        continue;
      } else {
        result = "NO";
        break;
      }
    }
  } else result = "NO";
  console.log(result);
};
const input = [];
const main = (rl) => {
  rl.on("line", (line) => {
    input.push(Number(line));
  }).on("close", () => {
    solution(input);
    process.exit();
  });
};

main(rl);
