// GLOBALS - NO WINDOW !!!

// __dirname  - return path of current directory
// __filename - file name
// repuire    - functin to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

console.log(__dirname);
console.log(__filename);

// setInterval(() => {
//     console.log('Hello world');
// }, 1000);

setTimeout(() => {
    console.log('hello world');
}, 2000);