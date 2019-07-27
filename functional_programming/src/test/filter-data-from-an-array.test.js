/**
 * test for ../filter-data-from-an-array.js
 * https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming/use-the-filter-method-to-extract-data-from-an-array
 */

import { ratings } from "../filter-data-from-an-array";

const expected = [{ title: "Inception", rating: "8.8" }];

describe("ratings2 function", () => {
  it("should return an array of objects", () => {
    expect(ratings()).toEqual(expect.arrayContaining(expected));
  });
});
