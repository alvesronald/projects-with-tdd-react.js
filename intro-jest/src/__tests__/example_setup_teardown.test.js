describe("setup and teardown examples", () => {
  // Executa antes de todos testes
  beforeAll(() => {
    console.log("beforeAll");
  });

  // Executa antes de cada teste
  beforeEach(() => {
    console.log("beforeEach");
  });

  // Executa depois de todos testes
  afterAll(() => {
    console.log("afterAll");
  });

  // Executa depois de cada teste
  afterEach(() => {
    console.log("afterEach");
  });

  test("example 1", () => {
    expect(true).toBe(true);
  });
});
