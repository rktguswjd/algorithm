function solution(record) {
  for (let i = 0; i < record.length; i++) {
    record[i] = record[i].split(" ");
  }
  const map = new Map();
  for (let i = 0; i < record.length; i++) {
    const comm = record[i][0];
    if (comm === "Leave") continue;
    const uid = record[i][1];
    const name = record[i][2];
    map.set(uid, name);
  }

  const result = [];

  for (let i = 0; i < record.length; i++) {
    const comm = record[i][0];
    const uid = record[i][1];
    const name = map.get(uid);
    let str = "";
    switch (comm) {
      case "Enter":
        str += name + "님이 들어왔습니다.";
        break;
      case "Leave":
        str += name + "님이 나갔습니다.";
        break;
      case "Change":
        continue;
    }
    result.push(str);
  }
  console.log(result);
}

const record = [
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
];

solution(record);
