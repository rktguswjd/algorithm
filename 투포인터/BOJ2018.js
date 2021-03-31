const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const solution = (input) => {
    const n = +input.shift();

    let start = 1;
    let end = 2;
    let sum = 3;
    //1 2 3 5 5 6 7 8 9 10
    //
    let count = 0;

    while (true) {
        if (sum >= n) {
            if (sum == n) count++;
            start++;
            sum -= start - 1;
        } else if (end == n) break;
        else {
            end++;
            sum += end;
        }
    }
    console.log(count);
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
