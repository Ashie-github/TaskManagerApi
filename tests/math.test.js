const {
  calculateTip,
  celsiusToFahrenheit,
  fahrenheitToCelsius,
  add,
} = require("../src/math");

test("Should calculate total with tip", () => {
  const total = calculateTip(10, 0.3);
  expect(total).toBe(13);
});

test("Should calculate total with default tip", () => {
  const total = calculateTip(10);
  expect(total).toBe(12.5);
});

test("Should convert 32F to 0C", () => {
  const celsius = fahrenheitToCelsius(32);
  expect(celsius).toBe(0);
});

test("Should convert 0C to 32F", () => {
  const fahrenheit = celsiusToFahrenheit(0);
  expect(fahrenheit).toBe(32);
});

// test("Async test demo", (done) => {
//   setTimeout(() => {
//     expect(1).toBe(2);
//     done();
//   }, 2000);
// });

test("Should add two numbers - then", (done) => {
  add(2, 3).then((sum) => {
    expect(sum).toBe(5);
    done();
  });
});

test("Should add two numbers - async/await", async () => {
  const sum = await add(10, 22);
  expect(sum).toBe(32);
});
