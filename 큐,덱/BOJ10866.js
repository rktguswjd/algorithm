const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

class Deque {
    constructor() {
        this.data = [];
        this.length = 0;
    }

    push_front(item) {
        this.data.unshift(item);
        this.length++;
    }

    push_back(item) {
        this.data[this.length] = item;
        this.length++;
    }

    pop_front() {
        if (this.empty() === false) {
            this.length--;
            return this.data.shift();
        }
        return -1;
    }

    pop_back() {
        if (this.empty() === false) {
            this.length--;
            return this.data.pop();
        }
        return -1;
    }

    size() {
        return this.length;
    }

    empty() {
        return this.length === 0;
    }

    getFront() {
        if (this.empty() === false) return this.data[0];
        return -1;
    }

    getBack() {
        if (this.empty() === false) {
            return this.data[this.length - 1];
        }
        return -1;
    }
}

const solution = (input) => {
    const n = +input.shift();
    const deque = new Deque();
    let ans = "";
    for (let i = 0; i < n; i++) {
        let comm = input[i].split(" ");
        switch (comm[0]) {
            case "push_front":
                deque.push_front(+comm[1]);
                break;
            case "push_back":
                deque.push_back(+comm[1]);
                break;
            case "pop_front":
                ans += deque.pop_front() + "\n";
                break;
            case "pop_back":
                ans += deque.pop_back() + "\n";
                break;
            case "size":
                ans += deque.size() + "\n";
                break;
            case "empty":
                if (deque.empty() == true) {
                    ans += 1 + "\n";
                } else {
                    ans += 0 + "\n";
                }
                break;
            case "front":
                ans += deque.getFront() + "\n";
                break;
            case "back":
                ans += deque.getBack() + "\n";
                break;
        }
    }
    console.log(ans);
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
