 let itemCount =11;
 let discount:number;


 if(itemCount >0 && itemCount <=5)
 {
    discount = 10;
 }
 else if(itemCount >=5 && itemCount <=10)
 {
    discount = 15;
 }
 else if(itemCount >10 && itemCount <=15)
 {
    discount =20;
 }
 else{
   discount = 30;
 }

 console.log(`you get ${discount} % for this Invoice `);
 