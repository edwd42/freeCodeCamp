// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming/implement-map-on-a-prototype

import { myMap } from "../implement-map-on-a-prototype";

const expected = [46];

describe("ratings function", () => {
  it("should return an array of numbers", () => {
    expect(myMap()).toEqual(expect.arrayContaining(expected));
  });
});
