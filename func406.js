function sum(a) {
    var b = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        b[_i - 1] = arguments[_i];
    }
    var result = a;
    for (var i = 0; i <= b.length;) {
        result = result + b[i];
    }
    console.log(result);
}
var c = sum(5, 10, 15, 20, 25, 30);
console.log(c);
