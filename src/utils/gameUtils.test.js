import gameUtils from "./gameUtils";

describe("get2DArray returns valid 2D array", () => {
  const result = gameUtils.get2DArray(5);

  it("return type should be an array", () => {
    expect(Array.isArray(result)).toBeTruthy();
  });

  it("the array should be 2D", () => {
    expect(result).toEqual(expect.arrayContaining([]));
  });

  it("array should be length defined by params", () => {
    expect(result).toHaveLength(5);
  });

  it("2D array should represent a grid therefore expect size to be n^2", () => {
    expect(result.length).toEqual(result[0].length);
  });
});

describe("HasConnectedPath takes a start and end point (Vector2) returns true if V are connected", () => {
  const vec1 = {};

  it("return type should be an array", () => {
    //expect(Array.isArray(result)).toBeTruthy();
  });
});
