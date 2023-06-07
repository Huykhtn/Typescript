const personal ={
  name: 'Frank Le',
  age: 27,
  hobbies: ['Coding','Reading']
}
let favoriteActivities: string[];
favoriteActivities = ['Sport'];

console.log(personal.name);
/* in thì chỉ in dược index số thứ tự phần tử trong mảng còn of thì in giá tri từng phần tử trong mảng */ 
for( const hobby of personal.hobbies){
    console.log(hobby.toUpperCase())
}
