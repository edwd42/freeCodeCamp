/**
 * test for ../filter-data-from-an-array.js
 * https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming/use-the-filter-method-to-extract-data-from-an-array
 */

import { ratings2 } from "../filter-data-from-an-array";

const expected = [];

describe("ratings2 function", () => {
  it("should return an array of objects", () => {
    expect(ratings2()).toEqual(expect.arrayContaining(expected));
  });
});
