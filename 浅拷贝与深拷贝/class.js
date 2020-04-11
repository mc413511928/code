class Star {
    constructor(name, age) {
        this.uname = name;
        this.age = age
    }

    sing() {
        console.log('唱');
    }
}

class TwoYearsAndHalf extends Star {
    constructor(name) {
        super(name, 21);
        this.jjr = jjr
    }

    dance() {
        console.log('跳');
    }

    rap() {
        console.log('rap');
    }

    ball() {
        console.log('打篮球');
    }
}

Star.like = '非常受欢迎！！！';

console.dir(TwoYearsAndHalf.like);

// var cxk = new TwoYearsAndHalf('蔡徐坤', '大烧猪');

// console.log(cxk.uname, cxk.jjr);
// cxk.sing();
// cxk.ball();

// var star1 = new Star('LDH', 60);

// star1.sing();