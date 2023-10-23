const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const set = new Set();

input.forEach((n) => set.add(Number(n) % 42));

console.log(set.size);
