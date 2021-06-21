module.exports = {
  roots: [ "<rootDir>/src" ],
  collectCoverage: true,
  coverageReporters: [ "text", "lcov" ],
  collectCoverageFrom: [
    "**/*.{js,jsx}",
    "!**/coverage/**",
    "!**/dist/**",
    "!**/node_modules/**",
    "!**/config/**",
  ],
  moduleNameMapper: { "^.+\\.(css|less)$": "<rootDir>/CSSStub.js" },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$",
  moduleFileExtensions: [ "js", "jsx" ],
  snapshotSerializers: [ "enzyme-to-json/serializer" ],
  setupFiles: [ "./tests.js" ],
};
