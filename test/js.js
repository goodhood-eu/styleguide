const { join } = require('path');
const { CLIEngine } = require(require.resolve('eslint', { paths: [process.cwd()] }));
const { collectLinterErrors, createTestErrorsCollector } = require('./utils');


const processFile = (file) => {
  const errorsLinter = file.messages.reduce(collectLinterErrors, []);
  const errorsTest = errorsLinter.reduce(createTestErrorsCollector(file.filePath), []);

  if (errorsTest.length) {
    console.error(`Errors found:\n${errorsTest.join('\n')}`);
    process.exit(1);
  }
};

module.exports = (dir, ext = 'js') => {
  const cli = new CLIEngine();
  const result = cli.executeOnFiles(join(dir, `**/**.${ext}`));

  result.results.forEach(processFile);
};
