const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let n = 0;
let nArr = null;
const solution = (input) => {
    n = +input.shift();
    nArr = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        nArr[i] = i;
    }
    const visited = new Array(n + 1).fill(false);
    backtracking([], visited);
    console.log(ans);
};

let ans = "";

const backtracking = (picked, visited) => {
    if (picked.length == n) {
        ans += picked.join(" ") + "\n";
        return;
    }

    for (let i = 1; i <= n; i++) {
        if (visited[nArr[i]]) continue;
        visited[nArr[i]] = true;
        picked.push(nArr[i]);
        backtracking(picked, visited);
        picked.pop();
        visited[nArr[i]] = false;
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
