// OS Module
const os = require('os');

const user = os.userInfo();
console.log(`System uptime: ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
};

// Path module
const path = require('path');

console.log(path.sep);

const relativePath = path.join('../JSON', 'README.md');
console.log(path.basename(relativePath));

const absolutePath = path.resolve(__dirname, 'app.js');
console.log(absolutePath);

// FileSync module
const { readFileSync, writeFileSync } = require('fs'); // destructuring instead of importing the entire module
const first = readFileSync('./content/first.txt', 'utf8');
const sec = readFileSync('./content/sec.txt', 'utf8');
writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${sec}`);

// Async module
const { readFile, writeFile } = require('fs');

readFile('./content/first.txt', 'utf8', (err, result) => { // w/out utf8, it will return the data buffer
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/sec.txt', 'utf8', (err, result) => { // pretty poor async implementation, but it's just an example
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./content/result-sync.txt', `\nHi my secret file with all my secrets says: ${second}, but I just say: ${first}`, {flag: 'a'}, (err, result) => { // Flags are how you specify file permissions (e.g read/write/append etc.)
            if (err) {
                console.log(err);
                return;
            }
            console.log(`Another nested function! Here's the result: ${result}`);
        });
    });
});



