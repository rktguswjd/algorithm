class Queue {
  constructor() {
    this.store = [];
  }

  empty() {
    return this.store.length === 0;
  }

  enqueue(data) {
    this.store.push(data);
  }

  dequeue() {
    if (this.empty()) {
      return -1;
    }
    this.store.shift();
  }

  peek() {
    return this.store[0];
  }

  print() {
    console.log(this.store);
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
