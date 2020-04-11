var keys = ['name', 'price', 'isProduct'];

var books = [
    { name: 'JS高级编程', price: 80, isProduct: true },
    { isProduct: true, price: 44, name: '设计心理学' },
    { name: '锋利的 jQuery', comment: '好书啊！！', price: 38, isProduct: false },
    { name: '微交互', isProduct: true, price: 35 },
    { price: 29, isProduct: true, name: 'Javascript DOM 编程艺术', isDelete: true },
    { name: '你不知道的 JavaScript', price: 49, isProduct: true, isDelete: null },
];

var tbody = document.querySelector('tbody');

for (var i = 0; i < books.length; i++) {
    var tr = document.createElement('tr');
    var book = books[i];

    // key: name, price, inProduct
    for (var j of keys) {
        var td = document.createElement('td');

        td.innerHTML = book[j];

        tr.appendChild(td);
    }

    tbody.appendChild(tr);
}

// console.log(JSON.stringify(books));

// localStorage.setItem('BOOKS', JSON.stringify(books))

// SUPER_BOOKS
// localStorage['SUPER_BOOKS'] = JSON.stringify(books);

// 取
var books3 = sessionStorage['BOOKS'];

console.log(books3);

a = 10;

var obj = {
    a: 20,
    fn: function() {
        console.log(this.a);
        this.a = 30
    }
}
obj.fn();
new obj.fn();
console.log(obj.a);
console.log(window.a);