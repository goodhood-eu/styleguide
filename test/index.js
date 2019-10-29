const { findFiles } = require('./utils');


const fileRegExpMap = {
  css: /\.scss$/,
  js: /\.(js|es)$/,
};

const fileProcessorMap = {
  css: require('./stylelint'),
  js: require('./eslint'),
};

const start = () => {
  const fileType = process.argv[process.argv.length - 1];
  const dir = process.argv[process.argv.length - 2];

  const files = findFiles(dir, fileRegExpMap[fileType]);
  files.forEach(fileProcessorMap[fileType]);
};

start();
