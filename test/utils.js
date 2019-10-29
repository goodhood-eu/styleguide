const { readFileSync } = require('fs');
const { relative } = require('path');


const specPrefix = '// expect:';

const arrayDiff = (arr, compareArr) => arr.filter((err) => !compareArr.includes(err));
const formatError = (filePath, line, message) => (
  `[${relative(process.cwd(), filePath)}:${line}] ${message}`
);

const parseSpec = (spec) => {
  if (!spec || !spec.includes(specPrefix)) return [];

  const rules = spec.replace(specPrefix, '');
  return rules.split(',').map((rule) => rule.trim());
};

exports.collectLinterErrors = (acc, { line, ruleId, rule }) => {
  const lineRecord = acc.find((item) => item.line === line);
  const ruleKey = ruleId || rule;

  if (lineRecord) {
    lineRecord.rules.push(ruleKey);
  } else {
    acc.push({ line, rules: [ruleKey] });
  }

  return acc;
};

exports.createTestErrorsCollector = (filePath) => {
  const fileLines = readFileSync(filePath, 'utf8').split('\n');

  return (acc, { line, rules }) => {
    const specRules = parseSpec(fileLines[line - 2]);

    const notCheckedRules = arrayDiff(specRules, rules);
    const extraCheckedRules = arrayDiff(rules, specRules);

    if (notCheckedRules.length) {
      acc.push(formatError(filePath, line, `Linter should check these rules: ${notCheckedRules.join(', ')}`));
    }

    if (extraCheckedRules.length) {
      acc.push(formatError(filePath, line, `Linter should not check these rules: ${extraCheckedRules.join(', ')}`));
    }

    return acc;
  };
};
