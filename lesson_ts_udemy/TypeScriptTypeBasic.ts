function add(n1: number,n2:number,showResult:boolean, phrase:string){
    const result = n1+n2;
    if(showResult){
        console.log(phrase+result)
    }
    else{
      return result;
    }
}
const number1 = 5.2;
const number2 = 6.2;

const printResult = true;
const phraseTest = 'Frankie De Jong';

add(number1,number2,printResult,phraseTest);
