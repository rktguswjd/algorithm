const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// 상 하 좌 우
const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];
let map = [];
let n = 0;
let cnt = 0;
const solution = (input) => {
    n = +input.shift();
    for (let i = 0; i < n; i++) {
        let arr = input[i].split("").map((n) => +n);
        map.push(arr);
    }

    let complexCount = 0;
    let apartCount = [];
    for (let h = 0; h < n; h++) {
        for (let w = 0; w < n; w++) {
            // 아파트가 있는 땅일 때
            if (map[h][w] != 1) continue;
            cnt = 0;
            dfs(h, w, 1);
            complexCount++;
            apartCount.push(cnt);
        }
    }

    apartCount.sort((a, b) => a - b);
    let ans = complexCount + "\n";
    ans += apartCount.join("\n");
    console.log(ans);
};

const dfs = (y, x) => {
    if (y < 0 || x < 0 || y >= n || x >= n) return;
    if (map[y][x] != 1) return;
    map[y][x] = 0;
    cnt++;
    for (let i = 0; i < 4; i++) {
        dfs(y + dy[i], x + dx[i]);
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
