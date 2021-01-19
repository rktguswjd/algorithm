function solution(n) {
  const triangle = [];
  for (let i = 0; i < n; i++) {
    let arr = [];
    for (let j = 0; j <= i; j++) {
      arr.push(0);
    }
    triangle.push(arr);
  }

  let x = 0;
  let y = 0;
  let num = 1;

  let state = "down";
  for (let i = 0; i < n; i++) {
    switch (state) {
      case "down":
        for (let j = i; j < n; j++) {
          triangle[x++][y] = num++;
        }
        x--;
        y++;
        state = "right";
        break;
      case "right":
        for (let j = i; j < n; j++) {
          triangle[x][y++] = num++;
        }
        x--;
        y -= 2;
        state = "up";
        break;
      case "up":
        for (let j = i; j < n; j++) {
          triangle[x--][y--] = num++;
        }
        x += 2;
        y++;
        state = "down";
        break;
    }
  }

  let answer = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      answer.push(triangle[i][j]);
    }
  }
  console.log(answer);
}

const n = 4;
solution(n);
