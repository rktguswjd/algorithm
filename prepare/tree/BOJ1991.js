const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Node {
  constructor(data) {
    this.data = data;
    this.leftNode = null;
    this.rightNode = null;
  }
}

class TreeTraversal {
  constructor() {
    this.root = null;
    this.result = "";
  }

  insert(data, left, right) {
    if (this.root == null) {
      if (data !== ".") this.root = new Node(data);
      if (left !== ".") this.root.leftNode = new Node(left);
      if (right !== ".") this.root.rightNode = new Node(right);
    } else {
      this.search(this.root, data, left, right);
    }
  }

  search(root, data, left, right) {
    if (root == null) return;
    else if (root.data === data) {
      if (left !== ".") root.leftNode = new Node(left);
      if (right !== ".") root.rightNode = new Node(right);
    } else {
      this.search(root.leftNode, data, left, right);
      this.search(root.rightNode, data, left, right);
    }
  }

  preorder(root = this.root) {
    this.result += root.data;
    if (root.leftNode != null) this.preorder(root.leftNode);
    if (root.rightNode != null) this.preorder(root.rightNode);
  }
  inorder(root = this.root) {
    if (root.leftNode != null) this.inorder(root.leftNode);
    this.result += root.data;
    if (root.rightNode != null) this.inorder(root.rightNode);
  }
  postorder(root = this.root) {
    if (root.leftNode != null) this.postorder(root.leftNode);
    if (root.rightNode != null) this.postorder(root.rightNode);
    this.result += root.data;
  }
}

const solution = (input) => {
  // 전위 순회 : 루트 -> 왼쪽 자식 -> 오른쪽 자식
  // 중위 순회 : 왼쪽 자식 -> 루트 -> 오른쪽 자식
  // 후위 순회 : 왼족 자식 -> 오른쪽 자식 -> 루트

  const tree = new TreeTraversal();

  // 입력한 값들은 TreeTraversal의 insert 기능을 통해 Node에 추가된다.
  // 하나의 노드는 왼쪽과 오른쪽에 자식을 가지고 있어야 하므로 Node클래스에서 leftNode와 rightNode의 초기값은null로 설정한다.
  // insert는 처음 root가 null 일 때 들어가고 root가 null이 아닐 때는 search를 호출한다.
  // search를 통해 재귀적으로 부모 노드 값을 찾아 트리에 값을 추가한다.

  const n = +input.shift();
  for (let i = 0; i < n; i++) {
    const [data, left, right] = input[i].split(" ");
    tree.insert(data, left, right);
  }

  tree.preorder();
  console.log(tree.result);
  tree.result = "";
  tree.inorder();
  console.log(tree.result);
  tree.result = "";
  tree.postorder();
  console.log(tree.result);
  tree.result = "";
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
