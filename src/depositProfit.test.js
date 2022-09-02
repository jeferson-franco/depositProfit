const solution = require('./depositProfit.js');

test('test 1', () => {
    expect(solution(100, 20, 170)).toBe(3);
});

test('test 2', () => {
    expect(solution(100, 1, 101)).toBe(1);
});

test('test 3', () => {
    expect(solution(1, 100, 64)).toBe(6);
});

test('test 4', () => {
    expect(solution(20, 20, 50)).toBe(6);
});

test('test 5', () => {
    expect(solution(50, 25, 100)).toBe(4);
});
