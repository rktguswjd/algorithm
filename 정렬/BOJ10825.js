const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  console.log(input);
  input.shift();
  input.sort((a, b) => {
    if (a[1] < b[1]) return 1;
    else if (a[1] == b[1]) {
      if (a[2] > b[2]) return 1;
      else if (a[2] == b[2]) {
        if (a[3] < b[3]) return 1;
        else if (a[3] == b[3]) {
          if (a[0].localeCompare(b[0]) > 0) return 1;
        }
      }
    }
    return -1;
  });

  let result = "";
  for (let i = 0; i < input.length; i++) result += input[i][0] + "\n";
  console.log(result);
};

const input = [];
const main = (rl) => {
  rl.on("line", (line) => {
    const arr = line.split(" ");
    const arr1 = [];
    arr1.push(arr[0], +arr[1], +arr[2], +arr[3]);
    input.push(arr1);
  }).on("close", () => {
    solution(input);
    process.exit();
  });
};

main(rl);
