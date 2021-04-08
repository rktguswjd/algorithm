const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const heap = [];
let heapSize = heap.length;
// 왼쪽 자식 인덱스 = 부모 인덱스 *2
// 오른쪽 자식 인덱스 = 부모 인덱스*2+1
// 부모 인덱스 = 자식 인덱스/2

const insertHeap = (item) => {
    // 힙 크기 하나 증가하고 마지막 노드에 추가
    heap[++heapSize] = item;
    // 마지막 노드가 자신 부모 노드보다 크면 swap
    for (let i = heapSize; i > 1; i = Math.floor(i / 2)) {
        if (heap[i] > heap[Math.floor(i / 2)]) {
            swap(i, Math.floor(i / 2));
        } else break;
    }
};

const delelteHeap = () => {
    // 배열이 빈 경우
    if (heapSize == 0) return 0;
    let rootItem = heap[1]; // 루트 노드의 값 저장
    heap[1] = heap[heapSize]; // 마지막 노드의 값을 루트 노드에 둠
    heap[heapSize--] = 0; // 힙 크기 하나 줄이고 마지막 노드 0으로

    for (let i = 1; i * 2 <= heapSize; ) {
        // 왼쪽 노드와 오른쪽 노드보다 클때 반목문 종료
        if (heap[i] > heap[i * 2] && heap[i] > heap[i * 2 + 1]) break;
        else if (heap[i * 2] > heap[i * 2 + 1]) {
            // 왼쪽 노드가 오른쪽 노드보다 큰 경우
            swap(i, i * 2);
            i = i * 2;
        } else {
            // 오른쪽 노드가 왼쪽 노드보다 큰 경우
            swap(i, i * 2 + 1);
            i = i * 2 + 1;
        }
    }
    return rootItem;
};

const swap = (i, j) => {
    let temp = heap[i];
    heap[i] = heap[j];
    heap[j] = temp;
};

const solution = (input) => {
    const n = +input.shift();
    let ans = "";
    for (let i = 0; i < n; i++) {
        let now = +input[i];
        if (now == 0) ans += delelteHeap() + "\n";
        else {
            insertHeap(now);
        }
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
