/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js"],
  collectCoverage: true,
  coverageReporters: ["json", "html", "text"],
  coverageThreshold: {
    global: {
      lines: 20,
    },
  },
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
};
