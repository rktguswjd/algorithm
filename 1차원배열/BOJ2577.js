const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const testCase = (mul) => {
  const mulArr = mul.split("");
  const array = new Array(10).fill(0);
  let j = 0;
  for (let i = 0; i < mulArr.length; i++) {
    if (mulArr === "0") {
      continue;
    }
    j = mulArr[i];
    array[j] += 1;
  }

  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
};

const input = [];
const main = (rl) => {
  rl.on("line", (line) => {
    input.push(parseInt(line));
  }).on("close", () => {
    const A = parseInt(input[0]);
    const B = parseInt(input[1]);
    const C = parseInt(input[2]);
    let mul = A * B * C;
    mul = "" + mul;
    testCase(mul);
    process.exit();
  });
};

main(rl);
