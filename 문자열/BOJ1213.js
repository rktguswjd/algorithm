const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (str) => {
  let len = str.length;
  let evenArr = [];
  let countArr = new Array(26).fill(0);
  for (let i = 0; i < len; i++) {
    countArr[str.charAt(i).charCodeAt() - 65]++;
  }
  let oddCount = 0;
  let res = "";
  let pos = -1;
  for (let i = 0; i < 26; i++) {
    if (countArr[i] % 2 == 0) {
      if (countArr[i] != 0) evenArr.push(i);
    } else {
      if (countArr[i] != 0) {
        countArr[i]--;
        if (countArr[i] > 0) evenArr.push(i);
        pos = i;
      }
      oddCount++;
    }
  }
  let result = true;
  //짝수
  if (len % 2 == 0) {
    if (oddCount > 0) {
      res += "I'm Sorry Hansoo";
      result = false;
    } else {
      res = "";
    }
  } else {
    //홀수
    if (oddCount >= 2) {
      res += "I'm Sorry Hansoo";
      result = false;
    } else res = String.fromCharCode(pos + 65);
  }
  //짝수 리스트 따다닥
  if (result) {
    for (let i = evenArr.length - 1; i >= 0; i--) {
      let idx = evenArr[i];
      let count = countArr[idx];
      let loopCount = count / 2;
      for (let j = 0; j < loopCount; j++) {
        let temp = String.fromCharCode(idx + 65);
        res = temp + res;
        res = res + temp;
      }
    }
  }
  console.log(res);
};

const main = (rl) => {
  rl.on("line", (line) => {
    solution(line);
  }).on("close", () => {
    process.exit();
  });
};

main(rl);
