const { AssertionError } = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const solution = (input) => {
    const N = +input[0];
    const arr = input[1]
        .split(" ")
        .map((e) => +e)
        .sort((a, b) => a - b);
    const M = +input[2];
    const findArr = input[3].split(" ").map((e) => +e);

    let result = "";
    let ans = 0;
    for (let i = 0; i < M; i++) {
        let findNum = findArr[i];
        let left = 0;
        let right = N - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (findNum > arr[mid]) {
                left = mid + 1;
            } else if (findNum < arr[mid]) {
                right = mid - 1;
            } else {
                ans = mid;
                break;
            }
        }

        if (arr[ans] == findNum) {
            result += 1 + "\n";
        } else {
            result += 0 + "\n";
        }
    }
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
