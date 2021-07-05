function solution(new_id) {
  new_id = step1(new_id);
  new_id = step2(new_id);
  new_id = step3(new_id);
  new_id = step4(new_id);
  new_id = step5(new_id);
  new_id = step6(new_id);
  new_id = step7(new_id);
  console.log(new_id);
}

const step1 = (new_id) => {
  // 대문자를 소문자로
  new_id = new_id.toLocaleLowerCase();
  return new_id;
};

const step2 = (new_id) => {
  // 소문자, 숫자, 빼기, 언더바, 마침표 제외한 문자 제거
  // 정규표현식
  new_id = new_id.replace(/[^a-z0-9-_.]/g, "");
  return new_id;
};

const step3 = (new_id) => {
  // 연속된 마침표를 하나의 마침표로 치환
  new_id = new_id.replace(/([.]){2,}/g, "$1");
  return new_id;
};

const step4 = (new_id) => {
  // 처음과 끝에 마침표 있을 시 제거
  // 문자열을 배열로 변환 후 검사
  // 검사 후 문자열로 변환

  new_id = new_id.split("");
  if (new_id[0] === ".") {
    // 처음 확인
    new_id.shift();
  }
  if (new_id[new_id.length - 1] === ".") {
    // 마지막 확인
    new_id.pop();
  }
  new_id = new_id.join("");
  return new_id;
};

const step5 = (new_id) => {
  // 빈 문자열 a로 치환
  if (new_id.length == 0) {
    new_id = "a";
  }
  return new_id;
};

const step6 = (new_id) => {
  // 길이가 16이상이라면 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거
  if (new_id.length >= 16) {
    new_id = new_id.slice(0, 15);
    // 마지막 문자가 .이면 제거
    if (new_id.charAt(new_id.length - 1) === ".") {
      new_id = new_id.substr(0, new_id.length - 1);
    }
  }
  return new_id;
};

const step7 = (new_id) => {
  //   길이가 2이하라면  마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙인다.
  if (new_id.length < 3) {
    let lastChar = new_id.charAt(new_id.length - 1);
    while (new_id.length !== 3) {
      new_id += lastChar;
    }
  }
  return new_id;
};

// let new_id = "...!@BaT#*..y.abcdefghijklm";
// let new_id="z-+.^."
let new_id = "=.=";
// let new_id="123_.def"
// let new_id="abcdefghijklmn.p"
solution(new_id);
