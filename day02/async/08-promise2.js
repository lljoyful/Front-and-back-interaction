const fs = require('fs');

function p1() {
    return new Promise((resolve, reject) => {
        fs.readFile('./1.txt', 'utf8', (err, result1) => {
            if (err != null) {
                reject(err);
            } else {
                resolve(result1);
            }
        });
    });
}

function p2() {
    return new Promise((resolve, reject) => {
        fs.readFile('./2.txt', 'utf8', (err, result2) => {
            if (err != null) {
                reject(err);
            } else {
                resolve(result2);
            }
        });
    });
}

function p3() {
    return new Promise((resolve, reject) => {
        fs.readFile('./3.txt', 'utf8', (err, result3) => {
            if (err != null) {
                reject(err);
            } else {
                resolve(result3);
            }
        });
    });
}
p1().then((r1) => {
        console.log(r1);
        return p2();
    })
    .then((r2) => {
        console.log(r2);
        return p3();
    })
    .then((r3) => {
        console.log(r3);

    });