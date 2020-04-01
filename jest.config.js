module.exports = {
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  preset: '@testing-library/react-native',
  setupFilesAfterEnv: ['@testing-library/react-native/cleanup-after-each'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|react-navigation|@react-navigation|@react-native-community|react-native-camera|react-native-qrcode-scanner))',
  ],
};
