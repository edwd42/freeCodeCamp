/**
 * test for ../Factorial_Accumulator.js
 */

import { factorial } from "../Factorial_Accumulator";

describe("factorial function", () => {
  it("should return a number", () => {
    expect(factorial(4)).toEqual(24);
  });

  it("should not return 24", () => {
    expect(factorial(-4)).not.toEqual(24);
  });

  it("should return 1", () => {
    expect(factorial(-4)).toEqual(1);
  });
});
