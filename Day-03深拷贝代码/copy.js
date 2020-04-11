var obj1 = {
    a: 1,
    b: 2,
    c: '123',
    msg: {
        h: '789'
    }
}

// 直接拿地址进行复制，这不是拷贝，这是共享数据。
// var obj2 = obj1;

var obj2 = {};

// 手工浅拷贝。
for (var key in obj1) {
    obj2[key] = obj1[key]
}

obj2.msg.h = '哈哈哈哈'

console.log(obj1);