function solution(gems) {
    const n = new Set(gems).size;
    const gemsMap = new Map();
    const ans = [];

    gems.forEach((name, i) => {
        gemsMap.delete(name);
        gemsMap.set(name, i);
        if (gemsMap.size == n) {
            ans.push([gemsMap.values().next().value + 1, i + 1]);
        }
    });

    ans.sort((a, b) => {
        if (a[1] - a[0] === b[1] - b[0]) {
            return a[1] - b[1];
        }
        return a[1] - a[0] - (b[1] - b[0]);
    });
    console.log(ans[0]);
}

const gems = [
    "DIA",
    "RUBY",
    "RUBY",
    "DIA",
    "DIA",
    "EMERALD",
    "SAPPHIRE",
    "DIA",
];
solution(gems);
