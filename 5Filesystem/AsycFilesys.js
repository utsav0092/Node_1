// Using Asysncronous File system

const { readFile, writeFile } = require('fs');

// Returns Buffer without utf-8(return text). 
// readFile('./5Filesystem/content/first.txt', 'utf-8', (err, result) => {
//     if (err) {
//         console.log(err);
//         return
//     }
//     else {
//         console.log(result);
//     }
// });


// We only get result when callback is settled otherwise error will come.
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
                console.log(result);
            });
        }
    });
});