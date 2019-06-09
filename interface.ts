//定义接口规范，声明动作和属性
interface Person {
    name:string;
    age:number;
    say():string;
}

class Coder implements Person {
    name = "xiaoming";
    age = 18;
    say(){
        return "我是个小前端";
    }
}

//接口函数的定义
interface myFunction {
    (n:string,a:number):boolean;
}

let fun:myFunction;
fun = function(n:string,a:number):boolean{
    return true
}