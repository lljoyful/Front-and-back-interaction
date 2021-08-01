const fs = require('fs');
let promise = new Promise((resolve, reject) => {
    fs.readFile('./11.txt', 'utf8', (err, result1) => {
        if (err != null) {
            reject(err);
        } else {
            resolve(result1);
        }
    });

});
promise.then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    })