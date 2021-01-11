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
  }

  peek() {
    return this.front && this.front.data;
  }

  print() {
    if (!this.front) {
      return -1;
    }
    let node = this.front;
    const arr = [];
    while (node) {
      arr.push(node.data);
      node = node.next;
    }
    console.log(arr);
  }
}

const main = () => {
  const queue = new Queue();
  for (let i = 1; i <= 5; i++) {
    queue.enqueue(i);
  }
  queue.print();
  let top = queue.peek();
  console.log(top);
  queue.dequeue();
  queue.print();
};

main();
