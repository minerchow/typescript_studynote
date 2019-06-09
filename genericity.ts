//实现一个方法，传入一个值，返回一个值
function test(n:any):any{
    return n;
}


//泛型方法
function genericityFun<T>(n:T):T{
    return n;
}

genericityFun<number>(22)

//泛型类
class genericityClass<T>{
    showNum(a:T):T{
        return a;
    }

    showString(s:T):T{
        return s;
    }
}

let m = new genericityClass<number>();
console.log(m.showNum(1));
let s = new genericityClass<string>();
console.log(s.showString("wwww"));

//泛型接口
interface config<T>{

    showValue(v:T):T
}


class genericityClass2<T> implements config<T>{  
    showValue(v: T): T {
        return v;
    }
}

let g = new genericityClass2<number>();
console.log(g.showValue(2222))