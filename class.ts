class Person {
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }
    say():string{
        return this.name+this.age+"岁";
    }
}


class Coder extends Person {
    say():string{
        return super.say() + ",是个小前端";
    }
}


let c = new Coder("xiaoming",18);
console.log(c.say());


// class Person {
//     name:string;
//     private age:number;
//     constructor(name:string,age:number){
//         this.name = name;
//         this.age = age;
//     }

//     set Age(age:number){
//         this.age = age;
//     }

//     get Age():number{
//         return this.age;
//     }
//     say():string{
//         return this.name+this.age+"岁";
//     }
// }


// class Boss extends Person {
//     say():string{
//      //   return this.age
//         return super.say() + ",是个大老板";
//     }
// }
// let p = new Person("xiaoming",18);
// console.log(p.say());
// p.Age = 10;
// console.log(p.Age);
// let b = new Boss("桂总",18);
// console.log(b.say());