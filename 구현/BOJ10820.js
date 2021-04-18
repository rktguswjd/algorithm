const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const solution = (input) => {
    for (let i = 0; i < input.length; i++) {
        let lowerCnt = 0; //소문자
        let upperCnt = 0; //대문자
        let numCnt = 0;
        let spaceCnt = 0;

        let str = input[i];
        for (let j = 0; j < str.length; j++) {
            if (str.charAt(j) == " ") spaceCnt++;
            else if (!isNaN(str.charAt(j))) numCnt++;
            else {
                if (
                    str.charAt(j).charCodeAt() >= 65 &&
                    str.charAt(j).charCodeAt() < 97
                )
                    upperCnt++;
                else lowerCnt++;
            }
        }
        console.log(lowerCnt, upperCnt, numCnt, spaceCnt);
    }
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
