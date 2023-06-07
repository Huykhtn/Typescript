const person22:{
    name:string,
    age:number,
    hobbies: string[],
    role?: [number,string] //Tupple type

} 
= {
    name: 'Frank Le',
    age: 29,
    hobbies: ['Cooking', 'Jogging'],
    role:[2,'author']
}

person22.role?.push("admin");
console.log(person22.role);
