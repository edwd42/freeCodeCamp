/**
 * test for ../MapDataFromArray.js
 * https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming/use-the-map-method-to-extract-data-from-an-array
 */

import { ratings } from "../MapDataFromAnArray";

const expected = [{ rating: "8.8", title: "Inception" }];

describe("ratings function", () => {
  it("should return an array of numbers", () => {
    expect(ratings()).toEqual(expect.arrayContaining(expected));
  });

  // it('should have length == 3', () => {
  //     expect(expected.length).toEqual(3);
  // });
});
