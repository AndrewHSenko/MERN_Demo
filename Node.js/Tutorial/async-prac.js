const {readFile, writeFile} = require('fs').promises;
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async () => {
    try {
        const first = await readFile('Node.js/content/first.txt', 'utf8');
        const sec = await readFile("Node.js/content/sec.txt", 'utf8');
        await writeFile('./content/result-mind-grenade.txt', `Let us write this new info now ${first} ${sec}`)
    }
    catch (error) {

        console.log(error);
    }
}

start()

// const getText = (path) => {
//     return new Promise((res, rej) => {
//         readFile(path, 'utf8', (err,data) => {
//             if (err) {
//                 rej(err);
//             }
//             else {
//                 res(data);
//             }
//         })
//     })
// }

// getText('./content/first.txt')
// .then((result) => console.log(result))
// .catch((err)=> console.log(err))