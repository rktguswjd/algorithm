const strDiff = (begin, word) => {
  let diff = 0;
  for (let i = 0; i < begin.length; i++) {
    if (begin.charAt(i) !== word.charAt(i)) {
      diff += 1;
    }
  }
  if (diff === 1) return true;
  else return false;
};

const solutionB = (begin, target, words) => {
  let visited = {};
  bfs(begin, visited, words);
  if (visited[target] == undefined) return 0;
  console.log(visited[target]);
  return visited[target];
};
const bfs = (begin, visited, words) => {
  let queue = [];
  queue.push(begin);
  visited[begin] = 0;

  while (queue.length != 0) {
    let now = queue.shift();
    for (let e of words) {
      if (!strDiff(now, e)) continue;
      if (visited[e] != undefined) continue;
      queue.push(e);
      visited[e] = visited[now] + 1;
    }
  }
};

let ans = 10000007;
const solutionD = (begin, target, words) => {
  dfs(begin, target, words, 0, {});

  return ans == 10000007 ? 0 : ans;
};
const dfs = (begin, target, words, count, visited) => {
  //조건처리
  if (visited[begin] != undefined) return;
  if (begin === target) {
    ans = Math.min(ans, count);
    return;
  }
  //방문처리
  visited[begin] = 1;
  //갈곳처리
  for (let e of words) {
    let temp = JSON.parse(JSON.stringify(visited));
    if (strDiff(begin, e)) {
      dfs(e, target, words, count + 1, temp);
    }
  }
};

const begin = "hit";
const target = "cog";
const words = ["hot", "dot", "dog", "lot", "log", "cog"];
// solutionB(begin, target, words);
solutionD(begin, target, words);
