/*
 * ES5 版本之后针对 Array 增加的一系列遍历方法。
 */

 // forEach。
var arr = [
    { name: 'dsz', haoren: '不是' },
    { name: '杨帆', haoren: '是' },
    { name: '李卓能', haoren: '是' },
    { name: 'xsz', haoren: '不是' },
];

// map(), every()

// arr.forEach(function (item, index, array) {
//     console.log(item, index, array);
// });

// arr.forEach(function (item) {
//     console.log(item.name + item.haoren + '好人');
// });

// filter。
// var newArr = arr.filter(function (item) {
//     return item.name.length === 2;
// });

var isHave = arr.some(function (item) {
    console.log(item);
    return item.name.length === 2;
})

console.log('isHave:', isHave);