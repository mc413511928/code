// map 和 forEach、filter、some、every、(includes) 是一套数组处理方法。

// price 单价； isProduct 是否在发行。
var books = [
    { name: 'JS高级编程', price: 80, isProduct: true },
    { name: '设计心理学', price: 44, isProduct: true },
    { name: '锋利的 jQuery', price: 38, isProduct: false },
    { name: '微交互', price: 35, isProduct: true },
    { name: 'Javascript DOM 编程艺术', price: 29, isProduct: true },
    { name: '你不知道的 JavaScript', price: 49, isProduct: true },
];

// map 的作用：
// 它能够遍历整个数组，同时把整个数组中，你需要的数据结构重新组合，并完整返回。

// 需求 1. 找出全部的书，但是不要告诉用户这本书是否还在发行。{ name: '书的名称', price: 单价 }
// var newArr = books.map(function (i, idx) {
//     return { name: i.name, price: i.price };
// });

// 需求 2. 找出全部的书，但是不要告诉用户这本书是否还在发行，
//        而且要标注出序号 id，从 1 开始。{ id: 1, name: '书的名称', price: 单价 }
// var newArr = books.map(function (i, idx) {
//     return { id: idx + 1, name: i.name, price: i.price };
// });

// 需求 3. 返回全部的：书名|带单位的价格 的字符串： ['锋利的 jQuery|38元', 'xxx|01元']
// var newArr = books.map(function (i) {
//     return i.name + '|' + i.price + '元';
// })

// 需求 4. 返回整个书的数组，其中，额外包含一个美元的价格（0.1428），不要告诉用户这本书是否还在发行
// { name: '书的名称', price: 单价, dollar: 美元单价 }
// var newArr = books.map(function (i) {
//     return { name: i.name, price: i.price, dollar: (i.price * 0.1428).toFixed(4) - 0 }
// });

// 组合需求 5. 找出40块以下的书，但是不要告诉用户这本书是否还在发行。
// 错误案例。
// var newArr = books.map(function (i) {
//     return i.price < 40 && { name: i.name, price: i.price };
// })

// var newArr = books.filter(function (i, idx) {
//     i.id = idx + 1;
//     return i.price < 40;
// }).map(function (i) {
//     return { id: i.id, name: i.name, price: i.price };
// });

// console.log(newArr);

// every -> 复习 some  every 就是反着的 some。

// var isHave29Book = books.some(function (i) {
//     return i.price === 29;
// })

// every 把里面每一项都必须给我满足条件。
var isAllProduct = books.every(function (i) {
    console.log(i);
    return i.isProduct;
})

console.log(isAllProduct);