function solution(deposit, rate, threshold) {
    let years = 0;
    while (deposit < threshold) {
        deposit += (deposit * rate) / 100;
        years++;
    }
    return years;
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test depositProfit

// alternative solution
// function solution(d, r, t) {
//     return Math.ceil(Math.log(t / d) / Math.log(r / 100 + 1));
// }

// alternative solution
// function solution(deposit, rate, threshold) {
//     let years = 0;
//     while (deposit < threshold) {
//         deposit *= 1 + rate / 100;
//         years++;
//     }
//     return years;
// }

// alternative solution
// function solution(deposit, rate, threshold) {
//     return Math.ceil(Math.log(threshold / deposit) / Math.log(1 + rate / 100));
// }
