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

    empty() {
        if (this.length == 0) return 1;
        else return 0;
    }

    size() {
        return this.length;
    }

    peek() {
        if (!this.front) return -1;
        return this.front && this.front.data;
    }

    back() {
        if (!this.front) return -1;
        return this.rear && this.rear.data;
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

const solution = (input) => {
    const n = +input.shift();
    const queue = new Queue();
    let str = "";
    for (let i = 0; i < n; i++) {
        let nowComm = input[i].split(" ");
        switch (nowComm[0]) {
            case "push":
                queue.enqueue(+nowComm[1]);
                break;

            case "pop":
                str += queue.dequeue() + "\n";
                break;

            case "size":
                str += queue.size() + "\n";
                break;

            case "empty":
                str += queue.empty() + "\n";
                break;

            case "front":
                str += queue.peek() + "\n";
                break;

            case "back":
                str += queue.back() + "\n";
                break;
        }
    }
    console.log(str);
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
