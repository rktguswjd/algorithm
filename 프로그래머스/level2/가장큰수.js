function solution(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    let arr = [];
    arr.push(String(numbers[i]), i);
    numbers[i] = arr;
  }

  for (let i = 0; i < numbers.length; i++) {
    let str = numbers[i][0];
    let ans = "";
    for (let j = 0; j < 5; j++) {
      ans += str;
    }
    numbers[i].unshift(ans.slice(0, 5));
  }

  numbers.sort((a, b) => {
    if (a[0] < b[0]) return 1;
    else if (a[0] == b[0]) {
      if (a[2] > b[2]) return 1;
    }
    return -1;
  });

  let result = "";
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i][1];
  }

  if (Number(result) == 0) {
    result = Number(result) + "";
    console.log(result);
  } else {
    console.log(result);
  }
}

const numbers = [0, 0, 0];
solution(numbers);
