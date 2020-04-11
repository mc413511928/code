// 1, 1, 2, 3, 5, 8, 13, 21, 34
// 1  2  3  4  5  6   7   8   9

function fb(n) {
    if (n < 3) return 1;

    return fb(n - 1) + fb(n - 2);
}

var list = [{
    id: 1,
    name: '家电',
    children: [{
        id: 11,
        name: '美的',
        children: [{
            id: 111,
            name: '冰箱'
        }, {
            id: 112,
            name: '吸尘器',
            children: [{
                id: 1121,
                name: 'Media XC-007'
            }]
        }]
    }, {
        id: 12,
        name: '格力',
        children: [{
            id: 121,
            name: '电饭煲'
        }]
    }, {
        id: 13,
        name: 'TCL'
    }]
}, {
    id: 2,
    name: '图书',
    children: [{
        id: 21,
        name: '儿童读物'
    }, {
        id: 22,
        name: '科技'
    }]
}, {
    id: 3,
    name: '家居',
    children: []
}];

function getProductByID(data, id) {
    var obj = null; // {id:,name:}

    for (var i of data) {
        // 如果，前一次同层次的循环，已经找到了数据，就终止循环，避免没有数组的对象覆盖了 obj。
        if (obj) break;
        // 1. 找当前这一层数据，是否有 ID 匹配的项。
        if (i.id === id) {
            obj = i;
        } else if (i.children) { // 8 -> 3
            // 2. 如果有子节点，就继续查找子节点。
            obj = getProductByID(i.children, id);
        }
    }

    return obj;
}

console.log(getProductByID(list, 1121));