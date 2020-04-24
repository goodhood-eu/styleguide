const [dir, type, ext] = process.argv.slice(2)
require(`./${type}`)(dir, ext);
