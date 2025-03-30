const { plus } = require("../module/plus");
const { subtract } = require("../module/subtract");
const { multiply } = require("../module/multiply");
const { divide } = require("../module/divide");

test("plus 1 + 2 to equal 3", () => {
  expect(plus(1, 2)).toBe(4);
});

test("subtract 4 - 2 to equal 2", () => {
  expect(subtract(4, 2)).toBe(2);
});

test("multiply 10 * 10 to equal 100", () => {
  expect(multiply(10, 10)).toBe(100);
});

test("divide 200 / 10 to equal 20", () => {
  expect(divide(200, 10)).toBe(20);
});
