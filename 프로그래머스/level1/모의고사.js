function solution(answers) {
    const supoza = ["12345", "21232425", "331122334455"];

    let countArr = [];
    for (let i = 0; i < 3; i++) {
        let nowArr = supoza[i];
        let str = "";
        for (let j = 0; j < answers.length; j++) {
            str += nowArr;
        }
        let arr = str.split("");
        let cnt = 0;

        for (let j = 0; j < answers.length; j++) {
            console.log(answers[j], Number(arr[j]));
            if (answers[j] == Number(arr[j])) {
                cnt++;
            }
        }
        countArr.push(cnt);
    }
    let ans = [];
    let max = Math.max.apply(null, countArr);
    for (let i = 0; i < countArr.length; i++) {
        if (max == countArr[i]) {
            ans.push(i + 1);
        }
    }
    console.log(ans.sort((a, b) => a - b));
}

const answers = [1, 3, 2, 4, 2];
solution(answers);
