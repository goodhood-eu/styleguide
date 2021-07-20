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

const findSpecLineIndex = (line, fileLines) => {
  const mayBeFileError = line === 1;
  if (mayBeFileError) return 0;

  for (let i = line - 2; i >= 0; i -= 1) {
    if (!fileLines[i].trim()) continue;
    return i;
  }

  return line - 2;
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
    const specLineIndex = findSpecLineIndex(line, fileLines);
    const specRules = parseSpec(fileLines[specLineIndex]);

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
