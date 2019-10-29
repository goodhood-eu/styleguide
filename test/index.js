const processorMap = {
  css: './stylelint',
  js: './eslint',
};

const start = () => {
  const type = process.argv[process.argv.length - 1];
  const dir = process.argv[process.argv.length - 2];

  const processor = require(processorMap[type]);
  processor(dir);
};

start();
