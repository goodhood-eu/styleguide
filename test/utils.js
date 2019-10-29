const { readdirSync, statSync, readFileSync } = require('fs');
const { join, relative } = require('path');


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

exports.findFiles = (dir, regExp) => {
  const files = readdirSync(dir, 'utf8');

  const collect = (acc, file) => {
    const filePath = join(dir, file);
    const isDir = statSync(filePath).isDirectory();

    if (isDir) {
      const children = exports.findFiles(filePath, regExp);
      return acc.concat(children);
    }

    if (!regExp.test(file)) return acc;
    return acc.concat([filePath]);
  };

  return files.reduce(collect, []);
};


exports.collectLinterErrors = (acc, { line, ruleId }) => {
  const lineRecord = acc.find((item) => item.line === line);

  if (lineRecord) {
    lineRecord.rules.push(ruleId);
  } else {
    acc.push({ line, rules: [ruleId] });
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
