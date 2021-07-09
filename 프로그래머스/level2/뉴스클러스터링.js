function solution(str1, str2) {
  const a = division(str1);
  const b = division(str2);

  const set = new Set([...a, ...b]);
  let union = 0;
  let intersection = 0;

  set.forEach((item) => {
    const has1 = a.filter((i) => i === item).length;
    const has2 = b.filter((i) => i === item).length;
    union += Math.max(has1, has2);
    intersection += Math.min(has1, has2);
  });

  return union == 0 ? 65536 : Math.floor((intersection / union) * 65536);
}

const division = (str) => {
  const arr = [];
  for (let i = 0; i < str.length - 1; i++) {
    let s = str.substr(i, 2);
    if (s.match(/[A-Za-z]{2}/)) {
      arr.push(s.toLowerCase());
    }
  }
  return arr;
};

let str1 = "aa1+aa2";
let str2 = "AAAA12";
solution(str1, str2);
