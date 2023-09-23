# CRAFTING QUALITY CODE

## Configure paths
- In vite.config.js
``` export default defineConfig({
  plugins: [
    react(),
    ViteSassPlugin()
  ],
  resolve: {
    alias: {
      "@src": "/src",
      "@pages": "/src/pages",
    },
  },
})
```
- In tsconfig.json
```
  "baseUrl": ".",
    "paths": {
      "@src/*": ["./src/*"],
      "@pages/*": ["./src/pages/*"],
    }
```

## Set Up for testing
- Use the Router in main.tsx
- Installing types:
  - npm install
  - npm i --save-dev @types/jest
  - npm install --save-dev @testing-library/react @types/testing-library__react
  - npm install --save-dev react-router-dom @types/react-router-dom
  - npm install --save-dev @testing-library/jest-dom
  - npm install --save-dev @babel/preset-env @babel/preset-react
  - npm install --save-dev jest-environment-jsdom
  - npm install --save-dev history
  - npm i --save-dev babel-jest
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
      "^.+\\.(css|less|scss|sass)$": "babel-jest",
      '^@src/(.*)$': '<rootDir>/src/$1', // Add more paths
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

  - Add this import within the test files  " import '@testing-library/jest-dom'; "

  - Add "esModuleInterop": true, to "compilerOptions" is tsconfig.json

