import { func } from "edge-js";
import path from "path";

interface ExampleFunctionInput {
  readonly message: string;
  readonly aNumber: number;
  readonly bNumber: number;
}

interface ExampleFunctionResponse {
  readonly message: string;
  readonly value: number;
}

const exampleInvokeFunction = func<
  ExampleFunctionInput,
  ExampleFunctionResponse
>({
  assemblyFile: path.resolve(__dirname, "dist", "Program.dll"),
  typeName: "Startup",
  methodName: "Invoke",
});

export const asyncCSharpFunc = async (input: ExampleFunctionInput) =>
  new Promise<ExampleFunctionResponse>((resolve, reject) => {
    exampleInvokeFunction(input, (error, result) => {
      if (error) {
        reject(error);
      }

      resolve(result);
    });
  });

/* 
  see types/edge-js/index.d.ts and 
  https://github.com/agracio/edge-js#how-to-integrate-c-code-into-nodejs-code
  you can make these function return synchronously if the underlying 
  csharp is synchronous but my type overload isn't cooperating at the moment
*/
export const syncCSharpFunc = (
  input: ExampleFunctionInput
): ExampleFunctionResponse => (exampleInvokeFunction as any)(input, true);
