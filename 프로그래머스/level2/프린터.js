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

// 다시 풀기
// function solution(priorities, location) {
//   const queue = new Array(priorities.length);
//   for (let i = 0; i < priorities.length; i++) {
//       queue[i] = [priorities[i], i];
//   }

//   const sequence = [];
//   while (queue.length !== 0) {
//       let nowArr = queue.shift();
//       let nowPriority = nowArr[0];
//       let flag = false;
//       for (let i = 0; i < queue.length; i++) {
//           let nextArr = queue[i];
//           let nextPriority = nextArr[0];
//           if (nowPriority < nextPriority) {
//               flag = true;
//               break;
//           }
//       }

//       if (flag == true) {
//           queue.push(nowArr);
//       } else {
//           sequence.push(nowArr);
//       }
//   }

//   for (let i = 0; i < sequence.length; i++) {
//       if (sequence[i][1] === location) {
//           console.log(i + 1);
//       }
//   }
// }

// const priorities = [2, 1, 3, 2];
// const location = 2;
// solution(priorities, location);
