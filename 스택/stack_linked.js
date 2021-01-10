class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  empty() {
    return this.len() === 0;
  }

  len() {
    return this.length;
  }

  push(data) {
    const node = new Node(data);
    node.next = this.top;
    this.top = node;
    this.length++;
  }

  pop() {
    this.top = this.top.next;
    this.length--;
  }

  peek() {
    if (this.empty()) {
      return -1;
    }
    return this.top.data;
  }

  print() {
    if (!this.top) {
      return "The stack is empty";
    }
    let node = this.top;
    const arr = [];
    while (node) {
      arr.push(node.data);
      node = node.next;
    }
    return arr;
  }
}

const main = () => {
  const stack = new Stack();
  console.log(stack.print());
  for (let i = 1; i <= 5; i++) {
    stack.push(i);
  }
  console.log(stack.print());
  let len = stack.len();
  console.log(len);

  stack.pop();
  stack.pop();
  console.log(stack.print());
  let peek = stack.peek();
  console.log(peek);
};

main();
