//Type Assertions 
type One = string;
type Two = string | number;
type Three = 'Hello';


// let testA = <One> 'hello';
let testA:One =  'hello';
let testB = testA as Two;
let TestC = testA as Three;


let testE = <string | number> 'world';
const addOrConcat = (a: number, b:number, c: 'add' | 'concat'): number | string =>{


    if( c ==='add' ) return a+b;
    return '' + a +b;
}


let myVal :string = addOrConcat(2,2,'concat') as string;
console.log(myVal);


// class

