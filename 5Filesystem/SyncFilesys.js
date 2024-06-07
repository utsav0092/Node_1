// Syncronous File system

const { readFileSync, writeFileSync } = require('fs');

console.log('start');

const first = readFileSync('./5Filesystem/content/first.txt', 'utf8');
const second = readFileSync('./5Filesystem/content/second.txt', 'utf8');

console.log(first, second);

// By updating the content in file you can update the output too.
// This will append the content in it too.
writeFileSync('./5Filesystem/content/result_sync.txt', `Here is the result : ${first}, ${second}`, { flag: 'a' });

console.log('done with this task');
console.log('statring the next one');