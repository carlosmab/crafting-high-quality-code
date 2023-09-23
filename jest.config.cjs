module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    "^.+\\.(css|less|scss|sass)$": "babel-jest",
    '^@src/(.*)$': '<rootDir>/src/$1',
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@features/(.*)$': '<rootDir>/src/features/$1',
  },
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
};