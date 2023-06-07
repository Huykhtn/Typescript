type numOrString = string| number;
function combine(input1:numOrString, input2: string|number){
    let result;
   
    if(typeof input1 === 'number' && typeof input2 ==='number'){
    return result =input1 + input2
   }
   else {
    return result = input1.toString().concat(input2.toString()); 
   }

}

console.log(combine("Frank Le",2));

console.log(combine(10,2));
