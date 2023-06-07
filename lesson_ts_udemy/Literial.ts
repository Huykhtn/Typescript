
type Combinable = number|string;// Alias type




function combineTest ( num1:Combinable, num2:Combinable,resultType: 'as-number'|'as-text')
{
    let result;
    if( typeof num1 ==='number' && typeof num2 ==='number'|| resultType ==='as-number')
    {
     result = +num1 + +num2;
    }
    else{
     result = num1.toString()+ num2.toString()
    }
    return result;
   
}


var n1 = combineTest(23,36,'as-number');

var n2 = combineTest("Franke Le","Huy Le",'as-text');

console.log(n1);
console.log(n2);
console.log(combineTest('23','56','as-number'));