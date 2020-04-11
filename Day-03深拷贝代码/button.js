// 专门去给按钮加提示功能的 类。
class AlertButton {
    constructor(selector, alertText) {
        this.button = document.querySelector(selector);
        this.text = alertText;
        this.button.onclick = this.alert.bind(this);
    }

    alert() {
        console.log(this);
        alert(this.text);
    }
}

var btn1 = new AlertButton('.btn1', '我是按钮1')
var btn2 = new AlertButton('#btn2', 'hahaha')

var btn3 = new AlertButton('.btn3', '我是按钮333333333');


setTimeout(function () { console.log(this); }.bind(btn2), 2000)