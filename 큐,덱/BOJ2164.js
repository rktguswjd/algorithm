const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let back = "";
class Node {
  // 각자의 노드, 노드의 data와 다음 노드를 가리킴
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null; // 제일 앞 노드
    this.rear = null; // 제일 뒷 노드
    this.length = 0; // 노드 길이
  }

  enqueue(data) {
    // 노드 추가
    const node = new Node(data); // data를 가진 node를 만듦
    if (!this.front) {
      this.front = node; // 앞 노드가 없을 경우 해당 노드를 front로
    } else {
      this.rear.next = node; // 아닐 경우 마지막의 다음 노드로
    }
    this.rear = node; // 마지막을 해당 노드로
    this.length++;
    back = data;
  }

  dequeue() {
    // 노드 삭제
    if (!this.front) {
      // front가 없으면 -1반환
      return -1;
    }
    // front 데이터를 data에 담아주고 front를 현재 front다음 것으로 바꿔주고 뺀 data 반환
    const data = this.front.data;
    this.front = this.front.next;
    this.length--;
    return data;
  }

  peek() {
    // front 반환
    // front가 있으면 front의 data 반환
    return this.front && this.front.data;
  }

  count() {
    // 큐 길이
    return this.length;
  }

  getQueue() {
    if (!this.front) return false;
    let node = this.front;
    const array = [];
    while (node) {
      array.push(node.data);
      node = node.next;
    }
    return array;
  }
}

const solution = (N) => {
  let queue = new Queue();
  for (let i = 0; i < N; i++) {
    queue.enqueue(i + 1);
  }

  for (let i = 0; i < N; i++) {
    if (queue.count() == 1) {
      console.log(back);
    }
    let data = 0;
    for (let j = 1; j <= 2; j++) {
      data = queue.dequeue();
    }
    queue.enqueue(data);
  }
};

const main = (rl) => {
  rl.on("line", (line) => {
    solution(Number(line));
  }).on("close", () => {
    process.exit();
  });
};

main(rl);
