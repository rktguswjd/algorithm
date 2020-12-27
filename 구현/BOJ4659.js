const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const solution = (input) => {
    let result = "";
    input.pop();
    for (let i = 0; i < input.length; i++) {
        let password = input[i].split("");
        let count = 0;
        // 모음(a,e,i,o,u) 하나를 반드시 포함하여야 한다.
        for (let j = 0; j < password.length; j++) {
            if (
                password[j] == "a" ||
                password[j] == "e" ||
                password[j] == "i" ||
                password[j] == "o" ||
                password[j] == "u"
            ) {
                count += 1;
                break;
            }
        }
        const vowelArr = ["a", "e", "i", "o", "u"];
        let wonseok = true;
        let passwordStr = password.join("");
        for (let k = 0; k < passwordStr.length - 2; k++) {
            let str = passwordStr.substring(k, k + 3);
            let vowelCount = 0;
            for (let j = 0; j < 3; j++) {
                if (vowelArr.indexOf(str.charAt(j)) != -1) vowelCount++;
            }
            if (vowelCount == 3 || vowelCount == 0) {
                wonseok = false;
                break;
            }
        }
        if (wonseok) count++;
        // 모음이 3개 혹은 자음이 3개 연속으로 오면 안 된다.
        // 같은 글자가 연속적으로 두번 오면 안되나, ee 와 oo는 허용한다.
        let continuity = true;
        for (let j = 0; j < password.length - 1; j++) {
            if (password[j] == password[j + 1]) {
                if (password[j] == "e" || password[j] == "o") continue;
                continuity = false;
                break;
            } else {
                continue;
            }
        }
        if (continuity == true) count += 1;

        // 결과 담기
        if (count == 3) {
            result += "<" + password.join("") + "> is acceptable.\n";
        } else {
            result += "<" + password.join("") + "> is not acceptable.\n";
        }
    }
    console.log(result);
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
