// const ADMIN =0;
// const USER =1;
// const AUTHOR =2;
enum Role {ADMIN,USER,AUTHOR};

const testPerson ={
    name:'le Nguyen Duc Huy',
    age:28,
    hobbies: ["sport","coding"],
    rule: Role.ADMIN
}

if(testPerson.rule === Role.ADMIN)
{
    console.log(`${testPerson.name} is admin`)
}