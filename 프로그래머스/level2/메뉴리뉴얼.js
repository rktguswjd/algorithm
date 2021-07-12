function solution(orders, course) {
  const ans = [];

  for (let c = 0; c < course.length; c++) {
    const menuMap = new Map();
    const n = course[c];
    for (let i = 0; i < orders.length; i++) {
      const singleArr = orders[i].split("");
      if (singleArr.length < n) continue;
      singleArr.sort();
      const visitedArr = new Array(singleArr.length).fill(false);
      backtracking(n, menuMap, [], singleArr, visitedArr, -1);
    }
    const menuArr = [...menuMap.entries()];
    if (menuArr.length == 0) continue;

    const max = menuArr.reduce((a, b) => (a[1] > b[1] ? a : b))[1];
    if (max < 2) continue;
    for (let m = 0; m < menuArr.length; m++) {
      if (menuArr[m][1] == max) ans.push(menuArr[m][0]);
    }
  }

  console.log(ans.sort());
}

const backtracking = (n, menuMap, pickedArr, singleArr, visitedArr, start) => {
  if (pickedArr.length == n) {
    const combi = pickedArr.join("");
    if (!menuMap.has(combi)) {
      menuMap.set(combi, 1);
    } else {
      menuMap.set(combi, menuMap.get(combi) + 1);
    }
    return;
  }

  for (let i = start + 1; i < singleArr.length; i++) {
    if (visitedArr[i]) continue;
    visitedArr[i] = true;
    pickedArr.push(singleArr[i]);
    backtracking(n, menuMap, pickedArr, singleArr, visitedArr, i);
    pickedArr.pop();
    visitedArr[i] = false;
  }
};

const orders = ["XYZ", "XWY", "WXA"];
const course = [2, 3, 4];

solution(orders, course);
