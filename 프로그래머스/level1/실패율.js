function solution(N, stages) {
  const arr = [];
  const result = [];
  for (let i = 0; i < N; i++) {
    let step = i + 1;
    let challenger = 0;
    let failure = 0;
    for (let j = 0; j < stages.length; j++) {
      if (step <= stages[j]) challenger++;
      if (step == stages[j]) failure++;
    }
    if (challenger == 0) {
      arr.push([i + 1, 0]);
    } else {
      let failurRate = failure / challenger;
      arr.push([i + 1, failurRate]);
    }
  }

  arr.sort((a, b) => {
    if (a[1] < b[1]) return 1;
    else if (a[1] == b[1]) {
      if (a[0] > b[0]) return 1;
    }
    return -1;
  });

  for (let i = 0; i < N; i++) {
    result.push(arr[i][0]);
  }
  console.log(result);
}

const N = 5;
const stages = [2, 1, 2, 6, 2, 4, 3, 3];

solution(N, stages);
