const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let parentArr = [];
const solution = (input) => {
    const n = +input.shift();
    const m = +input.shift();
    for (let i = 0; i < m; i++) {
        input[i] = input[i].split(" ").map((e) => +e);
    }

    // 부모 노드 배열
    parentArr = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        parentArr[i] = i;
    }

    // 그래프의 간선들을 가중치의 오름차순으로 정렬
    input.sort((a, b) => {
        if (a[2] > b[2]) return 1;
        return -1;
    });

    // 정렬된 간선리스트에서 순서대로 사이클을 형성하지 않는 간선 선택
    // 가장 낮은 가중치 먼저 선택 후 사이클 형성하는 간선 제외
    let count = 0;
    let cost = 0;
    let pick = 0;

    while (count !== n - 1 && pick < m) {
        let a = input[pick][0];
        let b = input[pick][1];
        // 사이클 생성 판단
        if (!isSameParent(a, b)) {
            cost += input[pick][2];
            count++;
            union(a, b);
        }
        find(a);
        find(b);
        pick++;
    }
    console.log(cost);
};

const isSameParent = (a, b) => {
    a = find(a);
    b = find(b);
    if (a === b) return true;
    else return false;
};

const union = (a, b) => {
    a = find(a); // 1
    b = find(b); // 2

    // 부모가 다를 때
    if (a != b) {
        if (a < b) parentArr[b] = a;
        else parentArr[a] = b;
    }
};

const find = (x) => {
    if (x === parentArr[x]) return x;
    return (parentArr[x] = find(parentArr[x]));
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
