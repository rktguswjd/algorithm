const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const merge = (input, left, right) => {
    let mid = Math.floor((left + right) / 2);
    let L = left;
    let R = mid + 1;
    let K = left;

    while (L <= mid && R <= right) {
        tempArr[K++] = input[L] <= input[R] ? input[L++] : input[R++];
    }

    if (L > mid) {
        for (let i = R; i <= right; i++) {
            tempArr[K++] = input[i];
        }
    } else {
        for (let i = L; i <= mid; i++) {
            tempArr[K++] = input[i];
        }
    }

    for (let i = left; i <= right; i++) {
        input[i] = tempArr[i];
    }
};

const mergeSort = (input, left, right) => {
    if (left === right) return;
    let mid = Math.floor((left + right) / 2);
    mergeSort(input, left, mid);
    mergeSort(input, mid + 1, right);
    merge(input, left, right);
};

const solution = (input) => {
    const n = input[0];
    input.splice(0, 1);
    mergeSort(input, 0, input.length - 1);
    let ans = "";
    for (let i = 0; i < n; i++) {
        ans += input[i] + "\n";
    }
    console.log(ans);
};

const input = [];
const tempArr = new Array(input.length);
const main = (rl) => {
    rl.on("line", (line) => {
        input.push(parseInt(line));
    }).on("close", () => {
        solution(input);
        process.exit();
    });
};

main(rl);
