const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let n = 0;
let m = 0;
const solution = (line) => {
    const arr = line.split(" ").map((n) => +n);
    n = arr[0];
    m = arr[1];

    const numArr = new Array(n).fill(0);
    for (let i = 0; i < numArr.length; i++) {
        numArr[i] = i + 1;
    }

    backtracking([], 0, numArr);
    console.log(ans.join("\n"));
};

const ans = [];
const backtracking = (pickedArr, start, numArr) => {
    if (pickedArr.length === m) {
        ans.push(pickedArr.join(" "));
        return;
    }

    for (let i = start; i < n; i++) {
        pickedArr.push(numArr[i]);
        backtracking(pickedArr, i, numArr);
        pickedArr.pop();
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
