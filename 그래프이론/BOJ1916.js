const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const solution = (input) => {
    const n = +input.shift();
    const m = +input.shift();
    const arr = new Array(m);
    for (let i = 0; i < m; i++) {
        let temp = input
            .shift()
            .split(" ")
            .map((n) => +n);
        arr[i] = temp;
    }
    let point = input.shift().split(" ");
    const start = +point[0];
    const end = +point[1];

    // 인접 리스트
    const list = Array.from(Array(n + 1), () => Array());
    for (let i = 0; i < m; i++) {
        list[arr[i][0]].push([arr[i][1], arr[i][2]]);
    }

    // 방문 배열
    const visited = new Array(n + 1).fill(false);

    // 거리(무게) 배열
    const weight = new Array(n + 1).fill(Infinity);

    dijkstra(start, end, list, visited, weight);
};

const dijkstra = (start, end, list, visited, weight) => {
    // 시작지점의 비용은 0
    weight[start] = 0;
    const queue = [];
    queue.push([start, weight[start]]);

    while (queue.length !== 0) {
        // 큐에서 비용이 적은 정점 뽑기
        // 우선순위 큐를 사용하지 않으면 시간 초과
        queue.sort((a, b) => a[1] - b[1]);
        let now = queue.shift();
        // 방문 검사
        if (visited[now[0]]) continue;
        // 방문 처리
        visited[now[0]] = true;

        for (let v = 0; v < list[now[0]].length; v++) {
            let next = list[now[0]][v];
            if (weight[next[0]] > weight[now[0]] + next[1]) {
                weight[next[0]] = weight[now[0]] + next[1];
                queue.push([next[0], weight[next[0]]]);
            }
        }
    }
    console.log(weight[end]);
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
