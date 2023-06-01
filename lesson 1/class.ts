class Coder{
    // name : string
    // music: string
    // age: number
    // lang:string
    secondLang! : string
    
    constructor(
        public name: string,
        public music:string,
        private age: number,
        protected lang:string = 'TypeScript')
        {
        this.name = name
        this.music = music
        this.age= age
        this.lang = lang

    }
    public getAge(){
        return `Hello, I'm ${this.age} years old`;
    }
    public useLang(){
        return ` I using ${this.lang} for my career `
    }
}
// const Huy_Le = new Coder ('Huy Le', 'Pop Balad',27);
// console.log(Huy_Le.getAge());
// console.log(Huy_Le.useLang());

class WebDev extends Coder{
    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number
       
    ){
        super(name,music, age)
        super.useLang();
        this.computer = computer
        

    }


      

}

// const Huy_Le1 = new WebDev ('DELL','Huy Le', 'Pop Music',25);
// console.log(Huy_Le1);
// console.log(Huy_Le1.useLang());



//Object
// type Guitarist = {
//     name: string,
//     active: boolean,
//     album: (number | string)[]
// }


// let evh :Guitarist = {
//     name: 'Micheal',
//     active: false,
//     album:[1992,2005,'I love you']
// }

// interface Guitarist {
//     name?: string,
//     active: boolean,
//     album: (number|string)[]
// }
interface Musician {
    name: string,
    instrument: string,
    play(action : string) : string
}

class Guitarist implements Musician{
    name: string
    instrument: string
    
    constructor(name: string, instrument: string)
    {
        this.name= name
        this.instrument= instrument
    }
    play(action:string) {
        return `${this.name} ${action} ${this.instrument}`
    }


}
class Peeps {
    static count: number = 0
    
    static getCount(): number {
        return Peeps.count
    }

    public id: number
    constructor(public name: string){
        this.name = name
        this.id = ++Peeps.count
    }
}

// const Huy_Le = new Peeps('Huy Le');
// const Frank_le = new Peeps('Frank Le');
// const Hong_Le = new Peeps('Minh Le');

// console.log(Huy_Le.id)
// console.log(Frank_le.id)
// console.log(Hong_Le.id)
// console.log(Peeps.count)


class Bands {
   private dataState: string[]
   
   constructor(){
    this.dataState = []
   }
   public get data(): string[]{
    return this.dataState
   }
   public set data(value: string[]) {
    if(Array.isArray(value) && value.every(el =>
        typeof el ==='string')){
            this.dataState = value
            return
        } else throw new Error('Params is not array of strings')
   }
}
const MyBands = new Bands()
MyBands.data = ['Neil Young','Frank Le']
console.log(MyBands.data)
MyBands.data = [...MyBands.data,'West Life']
console.log(MyBands.data);
MyBands.data= ['Beez','2220'];
console.log(MyBands.data)




