const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let ans = "";
const solution = (input) => {
  const n = +input.shift();
  for (let i = 0; i < n; i++) {
    input[i] = input[i].split(" ");
  }

  const set = new Set();

  for (let i = 0; i < n; i++) {
    // 왼쪽에서부터 오른쪽 순서로 단어의 첫글자가 단축기로 지정되었는지
    let key = "";
    let idx = 0;
    for (let j = 0; j < input[i].length; j++) {
      let str = input[i][j].charAt(0).toLowerCase();
      if (!set.has(str)) {
        // 단축키로 지정된 첫글자가 없다면
        set.add(str);
        replaceAt(idx, input[i], input[i][j].charAt(0));
        key = str;
        break;
      }
      idx += input[i][j].length + 1;
    }

    // 만약 모든 단어의 첫글자가 이미 지정되었다면
    if (key !== "") continue;
    idx = 0;
    // 왼쪽에서부터 차례대로 알파벳을 보면서 단축키 지정
    for (let j = 0; j < input[i].length; j++) {
      for (let k = 0; k < input[i][j].length; k++) {
        let str = input[i][j].charAt(k).toLowerCase();
        if (!set.has(str)) {
          idx += k;
          set.add(str);
          replaceAt(idx, input[i], input[i][j].charAt(k));
          key = str;
          break;
        }
      }
      idx += input[i][j].length + 1;
      if (key !== "") break;
    }
    if (key !== "") continue;
    replaceAt(0, input[i], "");
  }

  console.log(ans);
};

const replaceAt = (idx, str, alpabet) => {
  str = str.join(" ");
  if (alpabet === "") {
    ans += str + "\n";
  } else {
    ans +=
      str.substring(0, idx) +
      "[" +
      alpabet +
      "]" +
      str.substring(idx + 1, str.length) +
      "\n";
  }
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
