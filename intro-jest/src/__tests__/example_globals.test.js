test("description", () => {
  expect(true).toBe(true);
});

describe("this is for group test cases", () => {
  test("description 1", () => {
    expect(true).toBe(true);
  });

  test("description 2", () => {
    expect(true).toBe(true);
  });

  test("description 3", () => {
    expect(true).toBe(true);
  });

  it("description 4", () => {
    expect(true).toBe(true);
  });
});
