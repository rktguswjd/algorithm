function solution(d, budget) {
    d.sort((a, b) => a - b);
    let pos = 0;
    let cnt = 0;
    while (pos !== d.length) {
        budget -= d[pos];
        if (budget < 0) break;
        if (budget >= 0) {
            pos++;
            cnt++;
        }
    }
    console.log(cnt);
}

const d = [2, 2, 3, 3];
const budget = 10;

solution(d, budget);
