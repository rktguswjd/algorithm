const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const n = input.shift();
  const coordsArr = [];
  for (let i = 0; i < n; i++) {
    coordsArr.push(input[i].split(" ").map((num) => Number(num)));
  }

  coordsArr.sort((a, b) => {
    if (a[0] > b[0]) return 1;
    else if (a[0] == b[0]) {
      if (a[1] > b[1]) return 1;
    }
    return -1;
  });

  let result = "";
  coordsArr.forEach((e) => {
    result += e.join(" ") + "\n";
  });

  console.log(result);
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
