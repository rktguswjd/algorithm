const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const solution = (input) => {
    // 메모리초과
    const n = +input.shift();
    const arr = input
        .shift()
        .split(" ")
        .map((n) => +n);

    // 값들은 1번째 부터 계속 시작한다. -> -1 0번째시작하자고 하자
    // 3 2 1 -3 -1
    // 2 1 -4 -1
    // 터진 풍선이 없는 상태에서 위치를 정해줘야대

    let balloonArr = [];
    for (let i = 0; i < arr.length; i++) {
        balloonArr.push([arr[i], i + 1]);
    }

    let res = [];
    let removePos = 0;
    let backPos = 0;

    while (balloonArr.length != 0) {
        //터뜨리고 다음걸 봐
        let value = balloonArr[removePos][0];
        backPos = removePos;

        res.push(balloonArr[removePos][1]);
        balloonArr.splice(removePos, 1);

        let size = balloonArr.length;
        removePos += value;
        while (removePos < 0) removePos += size;
        removePos %= size;

        if (backPos < removePos) removePos--;
    }
    console.log(res.join(" "));
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
