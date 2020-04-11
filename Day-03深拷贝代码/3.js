var taxi = (function () {
    var start = 20;
    var total = 0;
    return {
        price: function (n) {
            if (n < 3) {
                total = start + 10 * n + 15;
            } else {
                total = start + 10 * n
            }
            return total;
        },
        yd: function () {
            return total + 10;
        }
    }
})();

console.log(taxi.price(3));
console.log(taxi.yd());