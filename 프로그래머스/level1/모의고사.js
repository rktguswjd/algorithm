function solution(answers) {
    const supoza1 = [1, 2, 3, 4, 5];
    const supoza2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const supoza3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    let cntArr = new Array(3).fill(0);
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === supoza1[i % 5]) cntArr[0]++;
        if (answers[i] === supoza2[i % 8]) cntArr[1]++;
        if (answers[i] === supoza3[i % 10]) cntArr[2]++;
    }

    let ansArr = [];
    let max = Math.max.apply(null, cntArr);
    for (let i = 0; i < cntArr.length; i++) {
        if (max == cntArr[i]) ansArr.push(i + 1);
    }
    ansArr.sort((a, b) => a - b);
    console.log(ansArr);
}

const answers = [1, 3, 2, 4, 2];
solution(answers);
