const stylelint = require(require.resolve('stylelint', { paths: [process.cwd()] }));
const { collectLinterErrors, createTestErrorsCollector } = require('./utils');


module.exports = async (filePath) => {
  try {
    const result = await stylelint.lint({ files: [filePath] });
    const errorsLinter = result.results[0].warnings.reduce(collectLinterErrors, []);
    const errorsTest = errorsLinter.reduce(createTestErrorsCollector(filePath), []);

    if (errorsTest.length) throw `Errors found:\n${errorsTest.join('\n')}`;
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
