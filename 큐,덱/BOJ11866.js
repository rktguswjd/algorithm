const { FORMERR } = require("dns");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }

  enqueue(data) {
    const node = new Node(data);
    if (!this.front) {
      this.front = node;
    } else {
      this.rear.next = node;
    }
    this.rear = node;
    this.length++;
  }

  dequeue() {
    if (!this.front) {
      return -1;
    }
    const data = this.front.data;
    this.front = this.front.next;
    this.length--;
    return data;
  }

  peek() {
    return this.front && this.front.data;
  }

  getQueue() {
    if (!this.front) {
      return false;
    }
    let node = this.front;
    const arr = [];
    while (node) {
      arr.push(node.data);
      node = node.next;
    }
    return arr;
  }
}

const solution = (input) => {
  const NKArr = input[0].split(" ");
  const N = Number(NKArr.shift());
  const K = Number(NKArr.shift());
  const getJosephus = [];

  const queue = new Queue();
  for (let i = 0; i < N; i++) {
    queue.enqueue(i + 1);
  }
  for (let i = 0; i < N; i++) {
    for (let j = 1; j <= K; j++) {
      if (j % K == 0) {
        getJosephus.push(queue.dequeue());
      } else {
        queue.enqueue(queue.dequeue());
      }
    }
  }

  let result = "<";
  for (let e = 0; e < N; e++) {
    if (e != N - 1) {
      result += getJosephus[e] + ", ";
      continue;
    }
    result += getJosephus[e] + ">";
  }
  console.log(result);
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
