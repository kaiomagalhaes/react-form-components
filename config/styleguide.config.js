const webpackConfig = require('./webpack.config.dev.js');

module.exports = {
  webpackConfig,
  components: '../src/components/**/index.js',
  ignore: [
    '**/__tests__/**',
    '**/*.test.js',
    '**/*.test.jsx',
    '**/*.spec.js',
    '**/*.spec.jsx',
    '**/App.js',
    '**/items.js',
    '**/keydown-events.js',
    '**/number-formatter.js',
    '**/number-normalizer.js',
    '**/number-validator.js',
    '**/caret-helper.js',
  ],
  highlightTheme: 'material',
};

