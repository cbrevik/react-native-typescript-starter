# React Native Typescript Starter

Starter project made for my Novanet blog post @ http://blog.novanet.no/easy-typescript-with-react-native/

Simple React Native starter project for TypeScript. Your typical Redux Counter-app, now with typing! Should give you intellisense in VSCode with @types.

Made possible by the great work of [@ds300](https://github.com/ds300) who landed a custom source extension PR in RN 0.45. He also made the [react-native-typescript-transformer](https://github.com/ds300/react-native-typescript-transformer) needed to transform the TypeScript for the RN packager. So hats off for him!

Important files
----
* [`rn-cli.config.js`](./rn-cli.config.js)
    * Config for ts/tsx source extensions, and the TS transformer.
* [`tsconfig.json`](./tsconfig.json)
    * Needed config for the TS compiler

App source code is found under the [src folder](./src). 

Required packages (see [`package.json`](./package.json))
---
* react-native >= `0.45.0` (RC as of this writing).
* react-native-typescript-transformer >= `1.0.5`

Type definitions are also nice to have:
* @types/react
* @types/react-native

