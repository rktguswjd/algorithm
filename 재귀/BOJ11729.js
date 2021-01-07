const { AssertionError } = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let count = 0;
let result = "";

const path = (START, GOAL) => {
    result += `${START} ${GOAL}\n`;
    count++;
};
const hanoi = (N, START, GOAL, ASSISTANT) => {
    if (N == 1) {
        // 원반이 1개
        // 시작점에서 도착지로 바로 옮김
        path(START, GOAL);
    } else {
        // 원반이 N개
        // 1. (원반이 N-1개 일 때 처럼) N-1개의 원반을 2로 옮김
        // 2. (원반이 1개 일 때 처럼) 마지막 원반을 C로 옮김
        // 3. (원반이 N-1개 일 때 처럼) N-1개의 원반을 B에서 C로 옮김

        hanoi(N - 1, START, ASSISTANT, GOAL);
        // N-1개의 원반을 1->2 로 보조 기둥 3을 이용하여 옮김
        path(START, GOAL);
        // 제일 큰 원반을 1->3으로 옮김
        hanoi(N - 1, ASSISTANT, GOAL, START);
        // N-1개의 원반을 2->3으로 보조 기둥 1을 사용하여 옮김
    }
};

const solution = (N) => {
    hanoi(N, 1, 3, 2);
    console.log(count + "\n" + result);
};

const main = (rl) => {
    rl.on("line", (line) => {
        wonseok(+line);
    }).on("close", () => {
        process.exit();
    });
};

main(rl);

//d[i]를 1부터 i그릇이  C에 놓여있는 상황이라고해보자

//d[1]
// [] [] [1]
//d[2]
// [] [] [1,2]
//d[n-1]
// [] [] [1~n-1]
// n번째 그릇을 추가한다고 하자
// n번째 원판 -> d[n-1] ->B n->C d[n-1] ->c
//d[n]
// [] [] [1~n]

// f(n) = f(n-1)-> B n->C f(n-1) ->C

let ans = [];
const wonseok = (N) => {
    hanoi_tower(N, "A", "B", "C");
};
const hanoi_tower = (N, start, mid, end) => {
    if (N == 1) {
        move(start, end);
        return;
    }
    hanoi_tower(N - 1, start, end, mid);
    move(start, end);
    hanoi_tower(N - 1, mid, start, end);
};
const move = (start, end) => {
    count++;
    ans.push(start + " " + end);
    console.log(start + "-> " + end);
};
