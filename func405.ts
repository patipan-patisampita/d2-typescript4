function display(name: string, greeting: string = 'Hello',favorit?:string): any {
    return greeting + ' ' + name;
}

console.log(display('Mark'));
let a = display('James', 'Hi');
console.log(a);
let b = display('Jeff','How are you','I love banana');

