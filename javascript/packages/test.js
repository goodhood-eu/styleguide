const { readFileSync } = require('fs');
const { CLIEngine } = require(require.resolve('eslint', { paths: [process.cwd()] }));

const testFile = process.argv[process.argv.length - 1];
const specPrefix = '// expect:';

const cli = new CLIEngine();
const result = cli.executeOnFiles([testFile]);
const report = CLIEngine.getErrorResults(result.results);

const testFileContents = readFileSync(testFile, 'utf8');
const testFileLines = testFileContents.split('\n');

const collectLinterErrors = (acc, { line, ruleId }) => ({
  ...acc,
  [line]: [ruleId, ...(acc[line] || [])],
});

const parseSpec = (spec) => {
  if (!spec || !spec.includes(specPrefix)) return [];

  const rules = spec.replace(specPrefix, '');
  return rules.split(',').map((rule) => rule.trim());
};

const formatError = (err) => `[Line ${err.line}] ${err.message}`;
const diff = (arr, compareArr) => arr.filter((err) => !compareArr.includes(err));

const checkedRules = ((report[0] && report[0].messages) || []).reduce(collectLinterErrors, {});

const collectErrors = (acc, line) => {
  const specRules = parseSpec(testFileLines[line - 2]);

  const notCheckedRules = diff(specRules, checkedRules[line]);
  const extraCheckedRules = diff(checkedRules[line], specRules);

  if (notCheckedRules.length) {
    acc.push({ line, message: `Linter should check this rules: ${notCheckedRules.join(', ')}` });
  }

  if (extraCheckedRules.length) {
    acc.push({ line, message: `Linter should not check this rules: ${extraCheckedRules.join(', ')}` });
  }

  return acc;
};

const errors = Object.keys(checkedRules).reduce(collectErrors, []);

if (errors.length) {
  console.error(`Errors found:\n${errors.map(formatError).join('\n')}`);
  process.exit(1);
}
