function solution(arr1, arr2) {
    const ans = Array.from(Array(arr1.length), () => Array(arr2[0].length));
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2[0].length; j++) {
            let sum = 0;
            for (let k = 0; k < arr1[0].length; k++) {
                sum += arr1[i][k] * arr2[k][j];
            }
            ans[i][j] = sum;
        }
    }
    console.log(ans);
}

const arr1 = [
    [1, 4],
    [3, 2],
    [4, 1],
];
const arr2 = [
    [3, 3],
    [3, 3],
];
solution(arr1, arr2);
