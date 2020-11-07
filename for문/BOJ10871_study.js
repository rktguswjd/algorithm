const solution = (x, y, a) => {
  x++;
  y++;
  a.push("짬지");
};

const main = () => {
  let a = [1, 2];

  let x = 1;
  let y = 2;
  console.log(`x:${x}, y:${y}`);
  let pos = 0;
  a.forEach((e) => console.log(`INDEX: ${pos++} ${e}`));
  solution(x, y, a);
  pos = 0;
  console.log(`x:${x}, y:${y}`);
  a.forEach((e) => console.log(`INDEX: ${pos++} ${e}`));
};

main();
