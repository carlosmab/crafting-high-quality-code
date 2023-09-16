# CRAFTING QUALITY CODE

Testing configure
- Installing types:
  - npm install
  - npm i --save-dev @types/jest
  - npm install --save-dev @testing-library/react @types/testing-library__react
  - npm install --save-dev react-router-dom @types/react-router-dom
  - npm install --save-dev @testing-library/jest-dom
  - npm install --save-dev @babel/preset-env @babel/preset-react
  - npm install --save-dev jest-environment-jsdom
  - create .babelrc file:
  ```
  {
  "presets": [
    "@babel/preset-env",
    ["@babel/preset-react", { "runtime": "automatic" }]
  ]
}
  ```
  - import '@testing-library/jest-dom';
  
  - Add  jest.config.cjs
  ```
  module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      '^@src/(.*)$': '<rootDir>/src/$1', // Map your path alias
    },
    transform: {
      "^.+\\.jsx?$": "babel-jest",
      "^.+\\.tsx?$": "ts-jest",
    },
    moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
  };
  ```

  - Add "jest" key to package.json 
  "jest": {
    "modulePaths": [
      "<rootDir>/src"
    ],
    "testEnvironment": "jsdom"
  }

  - Add "esModuleInterop": true, to "compilerOptions" is tsconfig.json
