//https://jestjs.io/pt-BR/

describe("matchers", () => {
  test("toBe", () => {
    expect(true).toBe(true);
  });

  test("toEqual", () => {
    const data = { one: 1 };
    data["two"] = 2;
    expect(data).toEqual({ one: 1, two: 2 });

    const arr = [1, 2, 3];
    expect(arr).toEqual([1, 2, 3]);
  });

  test("not", () => {
    expect(true).not.toBe(false);
  });

  test("there is no I in Team", () => {
    expect("team").not.toMatch(/I/);
  });
});
