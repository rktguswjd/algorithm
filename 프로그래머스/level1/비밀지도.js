function solution(n, arr1, arr2) {
  for (let i = 0; i < n; i++) {
    arr1[i] = arr1[i].toString(2);
    arr2[i] = arr2[i].toString(2);
  }
  for (let i = 0; i < n; i++) {
    if (arr1[i].length == n) continue;
    for (let j = arr1[i].length; j < n; j++) {
      arr1[i] = "0" + arr1[i];
    }
  }

  for (let i = 0; i < n; i++) {
    if (arr2[i].length == n) continue;
    for (let j = arr2[i].length; j < n; j++) {
      arr2[i] = "0" + arr2[i];
    }
  }
  const result = [];
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j < n; j++) {
      let A = +arr1[i].charAt(j);
      let B = +arr2[i].charAt(j);
      str += A | (B + "");
    }
    result.push(str);
  }
  console.log(result);

  const answer = [];
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j < n; j++) {
      let A = result[i].charAt(j);
      if (A == "1") {
        str += "#";
      }
      if (A == "0") {
        str += " ";
      }
    }
    answer.push(str);
  }

  console.log(answer);
}

const n = 6;
const arr1 = [46, 33, 33, 22, 31, 50];
const arr2 = [27, 56, 19, 14, 14, 10];

solution(n, arr1, arr2);
