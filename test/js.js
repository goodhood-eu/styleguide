const { join } = require('path');
const { ESLint } = require(require.resolve('eslint', { paths: [process.cwd()] }));
const { collectLinterErrors, createTestErrorsCollector } = require('./utils');


const processFile = (file) => {
  const errorsLinter = file.messages.reduce(collectLinterErrors, []);
  const errorsTest = errorsLinter.reduce(createTestErrorsCollector(file.filePath), []);

  if (errorsTest.length) {
    console.error(`Errors found:\n${errorsTest.join('\n')}`);
    return false;
  }

  return true;
};

module.exports = async(dir, ext = 'js') => {
  const eslint = new ESLint();
  const result = await eslint.lintFiles(join(dir, `**/**.${ext}`));

  const isSuccess = result.map(processFile).every(r => r);

  process.exit(isSuccess ? 0 : 1)
};
