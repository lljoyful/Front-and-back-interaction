// function getMsg(callback) {
//     setTimeout(function() {
//         callback({
//             msg: 'hello node.js'
//         })
//     }, 1000);
// }
// getMsg(function(data) {
//     console.log(data);
// });
function getMsg(callback) {
    setTimeout(function() {
        callback({
            msg: 'hello'
        });
    }, 1000);
}
getMsg(function(data) {
    console.log(data);
});