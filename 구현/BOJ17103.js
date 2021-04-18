const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const c = 1000000;
const primeArr = new Array(1000001).fill(true);
const solution = (input) => {
    const t = +input.shift();
    for (let i = 2; i <= c; i++) {
        if (primeArr[i]) {
            for (let j = 2; j * i <= c; j++) {
                primeArr[i * j] = false;
            }
        }
    }

    let ans = "";
    for (let i = 0; i < t; i++) {
        let nowTest = +input[i];
        let cnt = 0;
        for (let j = 2; j <= Math.floor(nowTest / 2); j++) {
            if (primeArr[j]) {
                if (primeArr[nowTest - j]) {
                    cnt++;
                }
            }
        }
        ans += cnt + "\n";
    }
    console.log(ans);
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
