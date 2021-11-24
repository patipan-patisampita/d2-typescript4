function display(name, greeting) {
    if (greeting === void 0) { greeting = 'Hello'; }
    return greeting + ' ' + name;
}
console.log(display('Mark'));
var a = display('James', 'Hi');
console.log(a);
