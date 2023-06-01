type huyType = number | string | object | boolean; //Alias type


function addElementNumberOrString1 (a: huyType, b: number | string) {
    if (typeof a ==='number' && typeof b === 'number')
    {
        return a + b ;
    }
    else if( typeof a ==='string' && typeof b ==='string')
    {
        return a.concat(b);
    }
    throw new Error("Just can handle  Parameters as String or Number  ");
    
}

console.log(">> check function here : \n",addElementNumberOrString1("Huy ", "Huy Le"));




