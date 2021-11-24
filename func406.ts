function sum(a: number, ...b: number[]) {
    let result = a;
    for (var i = 0; i <= b.length;) {

        result = result + b[i];
    }
    console.log(result);
}

let c = sum(5, 10, 15, 20, 25, 30);
console.log(c);
