function test(n:string):number{
    return Number(n);
}

console.log(test("11"));

//可选参数
function test2(n:string,m?:number):string{
    return 'aaa';
}

console.log(test2("aaa"));

//默认参数
function test3(name="xiaoming"){
    return name;
}

console.log(test3())

//剩余参数
function test4(n:string,...params:any[]):string{
    return params.join("-");
}

console.log(test4("a",1,"eee"));


//函数重载
function test5(n:string):string

function test5(n:number):number

function test5(n:any){
    return n;
}

console.log(test5('aaa'));
console.log(test5(1));