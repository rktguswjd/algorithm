function solution(lottos, win_nums) {
  let sameCnt = 0;
  let zeroCnt = 0;

  let result = [];
  let cntArr = new Array(2).fill(0);

  for (let i = 0; i < 6; i++) {
    if (lottos[i] == 0) zeroCnt++;
    let check = win_nums.indexOf(lottos[i]);
    if (check != -1) {
      sameCnt++;
      lottos[i] = 99;
      win_nums[check] = 99;
    }
  }
  cntArr[0] = sameCnt + zeroCnt;
  cntArr[1] = sameCnt;

  for (let c of cntArr) {
    switch (c) {
      case 6:
        result.push(1);
        break;
      case 5:
        result.push(2);
        break;
      case 4:
        result.push(3);
        break;
      case 3:
        result.push(4);
        break;
      case 2:
        result.push(5);
        break;
      default:
        result.push(6);
        break;
    }
  }
  console.log(result);
}

const lottos = [44, 1, 0, 0, 31, 25];
const win_nums = [31, 10, 45, 1, 6, 19];

solution(lottos, win_nums);
