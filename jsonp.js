< script >
    let btn = document.querySelector('#btn');
btn.onclick = function() {
    jsonp({
        url: 'http://localhost:3001/better',
        data: {
            name: 'zansan',
            age: 15
        },
        success: function(data) {
            console.log(data);


        }
    })
    console.log(123);
};



function jsonp(options) {
    // 创建script标签
    var script = document.createElement('script');
    var parmas = '';
    for (attr in options.data) {
        parmas += '&' + attr + '=' + options.data[attr];
    }
    var fn = 'myJsonp' + Math.random().toString().replace('.', '');
    window[fn] = options.success;
    script.src = options.url + '?callback=' + fn + parmas;
    document.body.appendChild(script);
    script.onload = function() {
        document.body.removeChild(script);
    }
} <
/script>