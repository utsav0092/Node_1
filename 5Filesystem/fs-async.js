// The whole code will run Asyncronously here we use callbacks.

const { readFile, writeFile } = require('fs');

console.log('start')

readFile('./5Filesystem/content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err);
        return
    }
    const first = result;
    readFile('./5Filesystem/content/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        else {
            const second = result;
            writeFile('./5Filesystem/content/result-async.txt', `Here is the async one : ${first}, ${second}`, (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log('done with this task');
            });
        }
    });
});

console.log('start next task');