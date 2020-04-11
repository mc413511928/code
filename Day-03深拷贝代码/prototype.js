function Star(name) {
    this.uname = name;
    this.age = 18;
}

Star.prototype.act = function () {
    console.log('我在表演！！');
}

function TwoYearsAndHalf(name) {
    Star.call(this, name);
    this.age = 21;
}

TwoYearsAndHalf.prototype = new Star();
TwoYearsAndHalf.prototype.contructor = TwoYearsAndHalf;

TwoYearsAndHalf.prototype.rap = function () {
    console.log('我在 RAP');
}

// var star1 = new Star('六学家')
// star1.age = 70; // star1.__proto__

// star1.act();

var cxk = new TwoYearsAndHalf('蔡徐坤')

cxk.act();
cxk.rap();

console.log(cxk);