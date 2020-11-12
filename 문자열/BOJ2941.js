const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const alpabet = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
  let position = 0;
  let resultSet = new Array();
  while (position < input.length) {
    let findStr = input.charAt(position);
    const arr = alpabet.filter((e) => e.substring(0, 1) === findStr);
    if (arr.length >= 1) {
      let bool = false;
      for (let i = 0; i < arr.length; i++) {
        let findLength = arr[i].length;
        if (input.substring(position, position + findLength) === arr[i]) {
          resultSet.push(arr[i]);
          position += findLength;
          bool = true;
          break;
        }
      }
      if (!bool) {
        position++;
        resultSet.push(findStr);
      }
    } else {
      position++;
      resultSet.push(findStr);
    }
  }
  console.log(resultSet.length);
};

const main = (rl) => {
  rl.on("line", (line) => {
    solution(line);
  }).on("close", () => {
    process.exit();
  });
};

main(rl);
