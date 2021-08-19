module.exports = {
    root: true,
    env: {
        node: true,
    },
    globals: {
        Promise: "readonly"
    },
    parser: "@typescript-eslint/parser",
    overrides: [
        {
          files: ['*.ts', '*.tsx', '*.js', '*.jsx'], // Your TypeScript files extension
          parserOptions: {
            project: ['./tsconfig.json'], // Specify it only for TypeScript files
          },
        }
    ],
  
    extends: ['airbnb-typescript'],
};