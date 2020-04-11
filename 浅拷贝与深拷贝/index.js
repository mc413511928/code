// 让数组能够获取到数组中所有字符串类型的数据，并形成一个新数组。

Array.prototype.getStrings = function () {
    // 1. 准备一个空数组，用于存放这些字符串类型的数据。
    var arr = [];

    // 2. 遍历原来的数组（this），并且找到对应类型为 String 的（也就是 typeof 拿到为 'string'）数据。
    for (var i = 0; i < this.length; i++) {
        // console.log(typeof this[i], this[i]);
        // 3. 将找到的字符串追加到 这个空数组中（push）。
        typeof this[i] === 'string' && arr.push(this[i]);
    }

    return arr;
}

var arr = [1, 3, 5, '7', 'a', { a: 1 }, 'b', '哈哈哈', 100];

console.log(arr.getStrings());