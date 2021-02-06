function solution(numbers) {
    const numArr = numbers.split("").map((e) => +e);
    const visited = new Array(numArr.length).fill(false);
    // numArr => set
    for (let i = 1; i <= numArr.length; i++) {
        backtracking(numArr, [], visited, i);
    }
    return set.size;
}
let set = new Set();

const backtracking = (numArr, pickedArr, visited, count1) => {
    // console.log(pickedArr.join(""));
    if (isPrime(+pickedArr.join("")) && count1 == 0) {
        set.add(+pickedArr.join(""));
        return;
    }

    for (let i = 0; i < numArr.length; i++) {
        if (visited[i] === true) continue;
        visited[i] = true;
        pickedArr.push(numArr[i]);
        backtracking(numArr, pickedArr, visited, count1 - 1);
        pickedArr.pop();
        visited[i] = false;
    }
};

const isPrime = (num) => {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) return false;
    }
    return num > 1 ? true : false;
};

const numbers = "011";
solution(numbers);
