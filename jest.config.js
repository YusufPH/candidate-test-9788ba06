module.exports = {
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
    collectCoverage: true,
    collectCoverageFrom: ["src/**/*.{js,jsx}"],
    coverageDirectory: "coverage",
    testEnvironment: "jsdom"
};
