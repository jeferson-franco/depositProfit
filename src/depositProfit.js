function solution(deposit, rate, threshold) {
    let years = 0;
    while (deposit < threshold) {
        deposit += deposit * rate / 100;
        years++;
    }
    return years;
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test depositProfit
