// npm - global command, comes with code
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm i -g <packageName>
// sudo npm install -g <packageName> {mac}

// package.json - mainfest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// npm i lodash
// npm uninstall lodash
// npm i bootstrap

// try using .gitignore while uploading the code.
// all the installed dependancies will store inside node module folder.

// When sharing the code just write npm install to install all the dependancies in your project

// Using lodash
const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);