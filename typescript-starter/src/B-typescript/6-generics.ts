
function showMyType<T>(arg: T): string {
   return typeof arg;
}

console.log(showMyType('hello world'));
console.log(showMyType(222));
console.log(showMyType(true));
console.log(showMyType({a: 'a', b: 'b'}));