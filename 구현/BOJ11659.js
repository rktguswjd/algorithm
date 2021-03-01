const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const solution = (input) => {
    //     5 3
    // 5 4 3 2 1
    // 1 3
    // 2 4
    // 5 5
    let info = input.shift().split(" ");
    let m = +info[1];

    let sumArr = [0];
    let sum = 0;
    input
        .shift()
        .split(" ")
        .map((e) => +e)
        .forEach((e) => {
            sum += e;
            sumArr.push(sum);
        });

    for (let i = 0; i < m; i++) {
        let pos = input.shift().split(" ");
        let start = +pos[0];
        let end = +pos[1];

        console.log(sumArr[end] - sumArr[start - 1]);
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
