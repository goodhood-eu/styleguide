const { CLIEngine } = require(require.resolve('eslint', { paths: [process.cwd()] }));
const { collectLinterErrors, createTestErrorsCollector } = require('./utils');


module.exports = (filePath) => {
  const cli = new CLIEngine();
  const result = cli.executeOnFiles([filePath]);
  const report = CLIEngine.getErrorResults(result.results);

  const errorsLinter = ((report[0] && report[0].messages) || []).reduce(collectLinterErrors, []);
  const errorsTest = errorsLinter.reduce(createTestErrorsCollector(filePath), []);

  if (errorsTest.length) {
    console.error(`Errors found:\n${errorsTest.join('\n')}`);
    process.exit(1);
  }
};
