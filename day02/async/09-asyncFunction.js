//加async 变成异步函数
// async function fn() {
//     //使用throw进行错误的抛出
//     throw '发生错误';
//     return 123;
// }
// // console.log(fn());
// fn().then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// })
async function p1() {
    return 'p1';
}
async function p2() {
    return 'p2';
}
async function p3() {
    return 'p3';
}
async function run() {
    let r1 = await p1();
    let r2 = await p2();
    let r3 = await p3();
    console.log(r1);
    console.log(r2);
    console.log(r3);
}
run();