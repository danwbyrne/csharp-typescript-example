## Getting Started

1. Make sure you can compile csharp code with

```bash
csc -version
```

2. Install npm dependencies

```bash
yarn install
```

3. Test

```bash
yarn jest
```

## Building More CSharp

I am just shipping the /dist/ but if you want to make changes to the example csharp you can run

```
csc -target:library -out:dist/Program.dll src/*.cs
```

to recompile the program we use in the examples.
