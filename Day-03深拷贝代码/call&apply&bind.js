function fn(arg1, arg2, arg3, arg4) {
    console.log(this);
    console.log(arg1, arg2, arg3);
    console.log(arg4);
}

var obj = {
    a: 1, b: 2
}

// 普通调用。
// fn(1, 'A', [7, 8, 9]); // window.fn();


// call 调用函数；改变函数执行过程中的 this 指向；后面就按顺序传递参数。
// fn.call(obj, 'A', 'B', "C");

// apply 调用函数；改变函数执行过程中的 this 指向；第二个参数是传递原函数参数列表的一个数组组合。
// fn.apply(obj, ['X', 'Y', 'Z']);

// bind 【不】调用函数，【返回】改变函数执行过程中的 this 指向的一个新函数（今后调用）；后面就按顺序传递参数。
var newFn = fn.bind(obj, 'A', 'B');

// 如果传递过参数（比如一部分），剩下的参数才是这个新函数的参数。
// newFn(1024);

var obj3 = {
    x: true
}

// 返回的新函数，也是函数~~！再次 bind 它的this和参数，不能被二次修改！！！！！！！！
var fn3 = newFn.bind(obj3, '512');

fn3('128');