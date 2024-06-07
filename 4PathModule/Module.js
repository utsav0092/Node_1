const path = require('path');

console.log(path.sep);

const filePath = path.join('./content', 'subfolder', 'file.txt');
const filepath = path.join('./content/subfolder/file.txt');
console.log(filePath);
console.log(filepath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, 'conternt', 'subfolder', 'file.txt');
console.log(absolute);