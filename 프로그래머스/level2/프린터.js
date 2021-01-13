function solution(priorities, location) {
  for (let i = 0; i < priorities.length; i++) {
    let arr = [];
    let value = priorities[i];
    arr.push(value, i);
    priorities[i] = arr;
  }

  const readyQueue = [...priorities];
  const ans = [];
  while (readyQueue.length > 0) {
    let arr = readyQueue.shift();
    let max = -1;
    for (let i = 0; i < readyQueue.length; i++) {
      if (max < readyQueue[i][0]) {
        max = readyQueue[i][0];
      }
    }

    if (arr[0] < max) {
      readyQueue.push(arr);
    } else {
      ans.push(arr);
    }
  }

  for (let i = 0; i < ans.length; i++) {
    if (location == ans[i][1]) {
      console.log(i + 1);
      break;
    }
  }
}

const priorities = [2, 1, 3, 2];
const location = 2;

solution(priorities, location);
