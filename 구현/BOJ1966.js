const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class QElement {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.items = [];
  }

  enqueue(data) {
    this.items.push(data);
  }

  dequeue() {
    let entry = 0;
    this.items.forEach((items, index) => {
      if (this.items[entry].priority < this.items[index].priority) {
        entry = index;
      }
    });
    return this.items.splice(entry, 1);
  }

  front() {
    if (this.isEmpty()) return "No elements in Queue";
    return this.items[0];
  }

  rear() {
    if (this.isEmpty()) return "No elements in Queue";
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length == 0;
  }

  printPQueue() {
    let str = "";
    for (let i = 0; i < this.items.length; i++)
      str += this.items[i].element + " ";
    return str;
  }
}

const solution = (input) => {
  const T = +input.shift();
  for (let i = 0; i < T; i++) {
    let infoArr = input
      .shift()
      .split(" ")
      .map((e) => +e);
    let arr = input
      .shift()
      .split(" ")
      .map((e) => +e);
    let N = infoArr[0];
    let findIdx = infoArr[1];

    let idxArr = [];
    let pos = 0;
    for (let j = 0; j < N; j++) {
      let temp = [];
      temp.push(pos++);
      temp.push(arr[j]);
      idxArr.push(temp);
    }

    let count = 1;
    while (idxArr.length > 0) {
      if (checkPriority(idxArr)) {
        if (idxArr.shift()[0] == findIdx) {
          console.log(count);
          break;
        } else {
          count++;
        }
      } else {
        idxArr.push(idxArr.shift());
      }
    }
  }
};
const checkPriority = (arr) => {
  let start = arr[0];
  let max = start[1];
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i][1]) return false;
  }
  return true;
};

const input = [];
const main = (rl) => {
  rl.on("line", (line) => {
    input.push(line);
  }).on("close", () => {
    solution(input);
    process.exit();
  });
};

main(rl);
