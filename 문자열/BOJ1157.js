const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const strArr = input.split("");
  const map = new Map();
  for (let i = 0; i < 26; i++) {
    const alpha = String.fromCharCode(65 + i);
    map.set(alpha, 0);
  }

  const mapArr = Array.from(map);
  for (let e of strArr) {
    mapArr[e.toUpperCase().charCodeAt() - 65][1]++;
  }

  mapArr.sort((a, b) => a[1] - b[1]);
  if (mapArr[mapArr.length - 1][1] != mapArr[mapArr.length - 2][1]) {
    console.log(mapArr[mapArr.length - 1][0]);
  } else {
    console.log("?");
  }
};

const main = (rl) => {
  rl.on("line", (line) => {
    solution(line);
  }).on("close", () => {
    process.exit();
  });
};

main(rl);
