declare module "edge-js" {
  export type CommentInput = () => void;
  export type MultiLineInput = string;
  export type PathInput = string;

  export interface AssemblyInput {
    readonly assemblyFile: string;
    readonly typeName?: string;
    readonly methodName?: string;
  }

  export type FuncOptions =
    | CommentInput
    | MultiLineInput
    | PathInput
    | AssemblyInput;

  export function func<InputType = any, OutputType = any>(
    args: FuncOptions
  ): (
    input: InputType,
    cb: (error: Error | undefined, result?: OutputType) => void
  ) => void;

  // this overload should work but I'm having trouble with it right now
  // export function func<InputType = any, OutputType = any>(
  //   args: FuncOptions
  // ): (input: InputType, cb: boolean) => OutputType;
}
