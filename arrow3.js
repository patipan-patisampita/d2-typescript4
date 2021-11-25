var Student = /** @class */ (function () {
    function Student(code, fname) {
        var _this = this;
        this.showDetail = function () { return _this.stdCode + " " + _this.stdName; };
        this.stdCode = code;
        this.stdName = fname;
    }
    return Student;
}());
var std = new Student(101, 'Mark');
console.log(std.showDetail());
