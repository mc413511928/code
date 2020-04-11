// 深拷贝函数。
function clone(target) {
    // 1. 首先要知道我们要拷贝的变】。量是【数组】还是【对象】
    // target instanceof Array
    // [] 和 {} 产生的都是 【【【【【全新】】】】】 的地址！！！！！！！！！！！！！！
    var copy = target instanceof Array ? [] : {};
    // 2. 遍历数组或者对象的 key
    for (var key in target) {
        // 3. 拿到当前遍历的值。
        var value = target[key];
        // 4. 通过 typeof 判断数组或者对象是否为复杂数据类型（除了 null）。
        // value !== null && typeof value === 'object'
        // if (value !== null && typeof value === 'object') {
        //     // 复杂数据类型的处理。
        //     copy[key] = clone(value);
        // } else {
        //     copy[key] = value;
        // }
        copy[key] = value && typeof value === 'object' ? clone(value) : value;
    }
    return copy;
}












var obj = {
    a: 1,
    b: 'str',
    c: {
        a: [1, 2, 3, 4, 5],
        h: [[{ a: 1, b: 2 }], [{ l: 7 }, {l: 9}]]
    },
    d: [[{ x: [1, 2, 3, 4] }]]
}

var arr = [1, 2, 3, 4, { a: 1 }];

var obj2 = clone(obj);
var arr2 = clone(arr)

obj2.c.h[1][1].l = 9999999;
arr2[4].a = 1111111;

console.log(obj2);
console.log(arr2);
console.log('-------------------------');
console.log(obj);
console.log(arr);
