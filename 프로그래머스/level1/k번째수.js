function solution(array, commands) {
  const ans = [];

  for (let n = 0; n < commands.length; n++) {
    let i = commands[n][0];
    let j = commands[n][1];
    let k = commands[n][2];

    const temp = array.slice(i - 1, j);
    temp.sort((a, b) => a - b);
    ans.push(temp[k - 1]);
  }
  console.log(ans);
}

const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];
solution(array, commands);
