const processor = process.argv[process.argv.length - 1];
const dir = process.argv[process.argv.length - 2];

require(`./${processor}`)(dir);
