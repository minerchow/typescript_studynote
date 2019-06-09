export namespace gaodun {
   interface Person {
        name:string;
        age:number;
        say():string;
    }

    export class Coder implements Person {
        name = "xiaoming";
        age = 18;
        say() {
            return "我是个小前端";
        }
    }
}