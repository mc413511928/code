
// 明星 Star 构造函数。
function Star(name, age) {
    this.uname = name;
    this.age = age
}

Star.prototype.sing = function () {
    console.log('唱');
}

// 练习时长2年半的明星。
function TwoYearsAndHalf(name, jjr) {
    Star.call(this, name, 21);
    // 额外追加属性。
    this.jjr = jjr;
}

// new Star().sing();

// 拿到原来想被继承的对象，因为对象能够访问自己的【原型链条】上的方法。
// 原因：就算修改我这个对象，追加更多的方法，不会影响（污染）到自己对象的原型。
TwoYearsAndHalf.prototype = new Star();

// 这个对象的构造函数是过去被继承的构造函数，需要改回自己的原型对象。
TwoYearsAndHalf.prototype.constructor = TwoYearsAndHalf;

// 追加更多的方法。
TwoYearsAndHalf.prototype.dance = function () {
    console.log('跳');
}

TwoYearsAndHalf.prototype.rap = function () {
    console.log('RAP');
}

TwoYearsAndHalf.prototype.ball = function () {
    console.log('打篮球');
}

var cxk = new TwoYearsAndHalf('蔡徐坤', '大烧猪');
var zjl = new Star('六学家', 70)



console.log(cxk.uname, cxk.age);