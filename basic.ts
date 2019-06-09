//boolean 类型

var isTrue:boolean = false;
console.log(isTrue);

//字符串类型
var str:string = "hello";
console.log(str);

//数字类型
var a:number = 20.0;
console.log(a);

//数组类型
var arr1:number[] = [1,2,3];
var arr2:Array<number> = [1,2,3];
console.log(arr1);
console.log(arr2)

//元祖类型
var tup:[number,string] = [1,"aa"];
console.log(tup)

//枚举类型
enum color  { red,green,yellow };
let c:color = color.red;
console.log(c);
enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2];
console.log(colorName);
//any类型
var b:any = '1';
console.log(b);