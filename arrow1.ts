//1.Regulation function
function getResult(useranme: string, points: number) {
    return useranme + points;
}
console.log(getResult('Mark', 50));

//2.Anonymous function with arrow function
var countries = (name: string, code: number): string => {
    return name + " " + code;
}
let coun = countries('Thailand', 66);
console.log(coun);

//3.Arrow function witrh parameter
let primeir = (team:string, divition:number) => {
    return team + divition;
}

console.log(primeir('Liver pool', 1));