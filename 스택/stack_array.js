class Stack {
  constructor() {
    this.store = [];
  }

  empty() {
    return this.store.length === 0;
  }

  length() {
    return this.store.length;
  }

  push(data) {
    this.store.push(data);
  }

  pop() {
    if (this.empty()) {
      return "Stack underflow";
    }
    this.store.pop();
  }

  peek() {
    if (this.empty()) {
      return -1;
    }
    return this.store[this.store.length - 1];
  }

  print() {
    if (this.empty()) {
      console.log("The stack is empty");
    } else {
      console.log(this.store);
    }
  }
}

const main = () => {
  const stack = new Stack();
  stack.print();
  for (let i = 1; i <= 5; i++) {
    stack.push(i);
  }
  stack.print();

  stack.pop();
  stack.pop();
  stack.print();
  let peek = stack.peek();
  console.log(peek);
};

main();
