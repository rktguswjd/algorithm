const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const t = +input.shift();
  let ans = "";

  for (let i = 0; i < t; i++) {
    let str = input[i];
    if (isPalindrome(str)) {
      ans += 0 + "\n";
    } else if (isPeseudoPalindrome(str)) {
      ans += 1 + "\n";
    } else {
      ans += 2 + "\n";
    }
  }
  console.log(ans);
};

const isPalindrome = (str) => {
  let reverseStr = str.split("").reverse().join("");
  return str === reverseStr;
};

const isPeseudoPalindrome = (str) => {
  let start = 0;
  let end = str.length - 1;
  while (start <= end) {
    if (str.charAt(start) != str.charAt(end)) {
      // a b b a c
      return (
        isPalindrome(str.substring(start, end)) ||
        isPalindrome(str.substring(start + 1, end + 1))
      );
    }
    start++;
    end--;
  }
  return true;
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
