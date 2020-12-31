function solution(s) {
  let pCount = 0;
  let yCount = 0;
  for (let i = 0; i < s.length; i++) {
    let pos = s.charAt(i);
    if (pos == "y" || pos == "Y") yCount++;
    if (pos == "p" || pos == "P") pCount++;
  }
  if (pCount == yCount) return true;
  else return false;
}

const s = "pPoooyY";
