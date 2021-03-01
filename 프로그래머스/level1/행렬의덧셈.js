function solution(arr1, arr2) {
  let answer = [];
  for (let i = 0; i < arr1.length; i++) {
    let a = arr1[i];
    let b = arr2[i];
    let temp = [];
    for (let j = 0; j < arr1[0].length; j++) {
      temp.push(a[j] + b[j]);
    }
    answer.push(temp);
  }
  console.log(answer);
}

const arr1 = [
  [1, 2],
  [2, 3],
];
const arr2 = [
  [3, 4],
  [5, 6],
];
solution(arr1, arr2);
