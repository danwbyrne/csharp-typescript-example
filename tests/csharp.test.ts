import { asyncCSharpFunc, syncCSharpFunc } from "../index";

describe("CSharp Function Tests", () => {
  test("runs -- async -- good data", async () => {
    const message = "Dan";
    const aNumber = 10;
    const bNumber = 5;

    const examplePayload = {
      message,
      aNumber,
      bNumber,
    };

    const result = await asyncCSharpFunc(examplePayload);

    expect(result.message).toEqual(`Hello ${message}, I'm a message from C#!`);
    expect(result.value).toEqual(15);
  });

  test("runs -- sync -- good data", () => {
    const message = "Dan";
    const aNumber = 10;
    const bNumber = 5;

    const examplePayload = {
      message,
      aNumber,
      bNumber,
    };

    const result = syncCSharpFunc(examplePayload);

    expect(result.message).toEqual(`Hello ${message}, I'm a message from C#!`);
    expect(result.value).toEqual(15);
  });
});
