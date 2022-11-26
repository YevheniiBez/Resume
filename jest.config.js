module.exports = {
    preset: "jest-preset-angular",
    setupFilesAfterEnv: ["<rootDir>/setupJest.ts"],
    transformIgnorePatterns: ["^.+\\.js$"],
    reporters: ["default"]
};
