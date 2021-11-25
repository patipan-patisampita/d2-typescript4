class Student {
    stdCode: number;
    stdName: string;

    constructor(code: number, fname: string) {
        this.stdCode = code;
        this.stdName = fname;
    }
    showDetail = () => `${this.stdCode} ${this.stdName}`;
}
let std = new Student(101, 'Mark');
console.log(std.showDetail());


