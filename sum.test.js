const sum = require('./sum');

test ('sum of two numbers', () => {
  expect(sum(1, 2)).toBe(3);
});

test('sum of three numbers', () => {
  expect(sum(1, 2, 3)).toBe(6);
});

test('sum of four numbers', () => {
  expect(sum(1, 2, 3, 4)).toBe(10);
});