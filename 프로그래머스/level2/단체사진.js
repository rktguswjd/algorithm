let ans = 0;
const map = new Map();
const arr = new Array(8).fill(0);
const visited = new Array(8).fill(false);

const solution = (n, data) => {
  map.set("A", 0);
  map.set("C", 1);
  map.set("F", 2);
  map.set("J", 3);
  map.set("M", 4);
  map.set("N", 5);
  map.set("R", 6);
  map.set("T", 7);

  dfs(0, data);
  console.log(ans);
};

const dfs = (pos, data) => {
  if (pos === 8) {
    let c1 = 0;
    let c2 = 0;
    let diff = 0;
    let compare = "";
    for (let i = 0; i < data.length; i++) {
      c1 = arr[map.get(data[i].charAt(0))];
      c2 = arr[map.get(data[i].charAt(2))];
      compare = data[i].charAt(3);
      diff = +data[i].charAt(4);
      if (compare === ">") {
        if (Math.abs(c1 - c2) - 1 <= diff) return;
      } else if (compare === "<") {
        if (Math.abs(c1 - c2) - 1 >= diff) return;
      } else if (compare === "=") {
        if (Math.abs(c1 - c2) - 1 != diff) return;
      }
    }
    ans++;
    return;
  }

  for (let i = 0; i < 8; i++) {
    if (!visited[i]) {
      visited[i] = true;
      arr[pos] = i;
      dfs(pos + 1, data);
      visited[i] = false;
    }
  }
};

const n = 2;
const data = ["N~F=0", "R~T>2"];
solution(n, data);
