module.exports = {
  preset: 'react-native',
  setupFiles: ['./jest.setup.js'],

  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|@react-native-community|@react-navigation)',
  ],
  coveragePathIgnorePatterns: ['/node_modules/', '/__tests__/', 'config.js$'],

  collectCoverageFrom: [
    '**/*.{ts,tsx,js,jsx}',
    '!src/**/*.style.ts',
    '!**/.eslintrc.js',
    '!**/.prettierrc.js',
    '!coverage/**',
  ],
  coverageThreshold: {
    global: {
      statements: 60, // Minimum 60% coverage on statements
      branches: 50, // Minimum 50% coverage on branches
      functions: 50, // Minimum 50% coverage on functions
      lines: 60, // Minimum 60% coverage on lines
      //NOTE: just have added less coverage but can increase
    },
  },
};
