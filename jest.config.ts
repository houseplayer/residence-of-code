import nextJest from "next/jest"

const createJestConfig = nextJest({
  dir: "./",
})

const customJestConfig = {
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
}

module.exports = createJestConfig(customJestConfig)
