function solution(dartResult) {
  let answer = [0, 0, 0];
  let count = 0;
  let number = 0;
  for (let i = 0; i < dartResult.length; i++) {
    let pos = dartResult.charAt(i);
    if (isNaN(pos) == false) {
      if (pos == "0" && number == 1) {
        number = 10;
        continue;
      }
      number = +pos;
      count += 1;
      continue;
    }
    switch (pos) {
      case "S":
        answer[count - 1] = number;
        break;
      case "D":
        answer[count - 1] = number * number;
        break;
      case "T":
        answer[count - 1] = number * number * number;
        break;
      case "*":
        if (count == 1) {
          answer[count - 1] *= 2;
        } else {
          answer[count - 2] *= 2;
          answer[count - 1] *= 2;
        }
        break;
      case "#":
        answer[count - 1] *= -1;
        break;
    }
  }

  let result = 0;
  for (let e of answer) {
    result += e;
  }
  console.log(result);
}

const dartResult = "1S*2T*3S";
solution(dartResult);
