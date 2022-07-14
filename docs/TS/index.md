# 1. 数据类型与推断  
TypeScript 在声明变量或是函数时需要添加约束也叫类型注释。  
支持的基本类型和引用类型有：string、number、boolean、null、undefined、symbol、array、object、Function、any，空值可以使用void来表示，void可以表示变量，也可以表示函数的返回值。  
声明数据类型：  
```js
let hello:string = 'hello word';
hello = 20; // 报错
```  
类型推断：  
通过负值类推断变量的类型  
```js
let num = 20;
num = '20'; // 报错，原因时num开始赋值的时数值类型，这他就只能是数值类型
``` 
::: warning 注意： 
开发过程中必须要类型声明  
:::

## 1.1 编译ts文件  
方式一：
tsc 1-helloword.ts    
方式二： 
全局安装ts-node插件  
npm install -g ts-node  
安装完成之后，通过命令运行ts文件  
ts-node 1-helloword.ts  
## 2. 接口与联合类型  
联合类型表示取可以为多种类型中的一种，可以通过管道(|)将变量设置为多种类型，赋值时可以根据设置的类型来赋值。  
### 2.1 联合类型实例 
```js
let numType:string|number = "hello word";
numType = 20;  // 不会报错
```    
### 2.2 接口  
接口可以理解为一种类型，一个规范，一个约束，可以对数组、对象、类进行约束，接口中可以定义可选属性、只读属性、任意属性，这样在开发代码时便于调试。  
```js
interface Istate {  // 接口关键字为 interface  接口名字必须为大写的I字开头  state为接口名
  name:string;
age:number;
}  
let user:Istate = {
  name: '张三';
  age: 10;
}
```  
#### 2.2.1 接口可选属性  
```js
interface Istate {  // 接口关键字为 interface  接口名字必须为大写的I字开头  state为接口名
  name:string;
  age?:number; //  ?表示可选属性
}  
let user:Istate = {
  name: '张三';
  age: 10;  
}
```    
#### 2.2.2 接口只读属性  
```js
interface Istate {  // 接口关键字为 interface  接口名字必须为大写的I字开头  state为接口名
  readonly name:string;   // 表示只读
  age?:number; 
}  
let user:Istate = {
  name: '张三';
  age: 10;  
}
user.name = '李四'; // 报错，因为name为只读属性
```   
#### 2.2.3 接口也支持联合类型
```js
interface Istate {  // 接口关键字为 interface  接口名字必须为大写的I字开头  state为接口名
  readonly name:string;   // 表示只读
  age:number|string; 
}  
let user:Istate = {
  name: '张三';
  age: 10;  
}
user.age= '20'; // 不报错
```     
#### 2.2.4 接口动态添加属性  
```js
interface Istate {  // 接口关键字为 interface  接口名字必须为大写的I字开头  state为接口名
  readonly name:string;   // 表示只读
  age?:number;   
  [propName:string]:any;  // propName自定义名称，属性名为string ，属性值为任意类型数据
}  
let user:Istate = {
  name: '张三';
  age: 10;  
  money: 20000000;
} // 不会报错
```     
#### 2.2.5 接口约束数组  
```js
interface IArray{
  [index:number]:any; // index为索引值，所以必须时数字类型，每个元素的值可以任意类型
}  
let arr:IArray = [1, 2, 3, true, '666'];  // 不会报错
```  
#  3. 数组与元组  
## 3.1 数组
数组对象是使用单独的变量名来存储一系列的值。常见的定义方式分别为：  
1. 类型+方括号    
```js
let arr1:number [] = [1, 2, 3,  4, 5];  
let arr2:string [] = ['1', '2', '3', '4', '5'];
let arr3:any [] = [1, '2', true];
```
2. 数组泛型  
```js
let arr1:Array<number> = [1, 2, 3,  4, 5];  
let arr2:Array<string> = ['1', '2', '3', '4', '5'];
let arr3:Array<any> = [1, '2', true]; 
```  
## 3.2 元组约束  
```js
let arr4:[string, number, boolean] = ["1", 2, true];
let arr5:[{ name:string, age:number }, { name:string, age:number }] = [
  { name: "张三", age: 18 }, { name: "李四", age: 20 }
]
```  
# 4. 函数类型  
函数类型的约束支持函数本身的参数约束和返回值的约束，如果支持联合类型的函数关系可以使用重载的方式。  
## 4.1 参数约束和返回值约束的函数  
```js
function funType(name:string, age:number):number {
  return age;
}
let ageNum:number = funType("张三", 18);
```    
## 4.2 函数参数为可选参数  
```js
function funType(name:string, age:number, gender?:string ):string {
  return name;
}
```  
## 4.3 函数动态参数  
函数参数不确定，使用扩展运算符来定义动态参数  
```js
function funType(name:string, age:number, ...args:any):any {
  return args;
}
```
## 4.4 函数参数默认值  
```js
function funType(name:string = "张三", age:number = 20):number {
  return age;
}
```  
## 4.5 表达式声明函数  
```js
let funType:(name:string, age:number) => number = function(name:sstring = "张三", age:number = 20):number {
  retrun age;
}
```    
## 4.6 接口约束函数  
```js
interface IFunType {
  (name:string, age:number):number;
}
let funType:IFunType = function(name:string, age:number):number {
  return age;
}
```  
## 4.7 联合类型函数  
联合类型的函数可以使用重载方式实现
```js
// 重载  
function getValue(value:number):number;
function getValue(value:string):string;
// 联合类型函数
function getValue(value:string|number):string|number {
  return value;
}
let val:string = getValue("张三")；
let val2:number = getValue(18);
```  

::: warning 注意：
函数重载必须写在函数声明前面  
:::

## 4.8 无返回值的函数  
```js
function fun():void {
  let age = 20;
}
```  
# 5. 类型断言  
## 5.1 类型断言  
类型断言可以用手动指定一个值的类型，将一个联合类型的变量指定为一个更加具体的类型。
```js
function getAssert(name:string|number) {
  // return (<string>name).length; // <string>name类型断言，不支持jsx
  return (name as string).length; // 使用as实现类型断言，在jsx（react中的ts版）中使用这种方式
}
getAssert("张三")；
getAssert(30);
```  

::: warning 注意：
类型断言不是类型转换，断言成一个联合类型不存在的类型是不允许的。  
:::

# 6. 类型别名  
类型别名可以用来给一个类型起一个新名字，采用关键字type定义，可以设置字符串和数值类型。  
## 6.1 约束数值类型
```js
type strType = string|number|boolean;
let str:strType = "张山";
str = 20;
str = true;
```  
## 6.2 约束字符串  
```js
type gender = "男"|"女";  
function getGender(s:gender):sring {
  return s;
}
getGender("男");
```
# 7.  枚举  
枚举（enum）类型是对JavaScript标准数据类型的一个补充，用于取值被限定在一定范围内的场景，定义数据集合，枚举成员会被赋值为从0开始递增的数字，同时也会被枚举到枚举名及逆行反向映射。  
## 7.1 枚举双向映射
```js
enum Days {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday
}
console.log(Days.Sunday); // 0 使用枚举名Sunday，可以获取到枚举0
console.log(Days[0]); // Sunday 使用枚举值0，可以获取到枚举名
console.log(Days.Saturday); // 6
console.log(Days[6]); // Saturday
console.log(Days); // 枚举类型会被编译成一个双向映射的对象  
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~·
 /* 用ts-node编译得到如下结果 */
0
Sunday  
6       
Saturday
{ '0': 'Sunday',
  '1': 'Monday',
  '2': 'Tuesday',
  '3': 'Wednesday',
  '4': 'Thursday',
  '5': 'Friday',
  '6': 'Saturday',
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6 }

```    
## 7.2 枚举从0开始递增  
枚举里面的元素默认情况下从0开始为元素的编号，也可以手动的指定成员的编号，代码示例如下：  
```js
enum Colors {
  Red = 10,
Green = 9,
Blue = 1000
}
console.log(Colors);  
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
{ '9': 'Green',
  '10': 'Red',
  '1000': 'Blue',
  Red: 10,
  Green: 9,
  Blue: 1000 }

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
enum Colors {
  Red = 10,
Green,
Blue
}
console.log(Colors);  
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
{ '10': 'Red',
  '11': 'Green',
  '12': 'Blue',
  Red: 10,
  Green: 11,
  Blue: 12 }
```  
# 8. 类的修饰符  
## 8.1 类的修饰符
在typescript中的类的修饰符有public、private、protected三个修饰符：  
* public修饰的属性或方法是共有的，可以在任何地方被访问到，默认所有的属性或方法都有public的。  
* private修饰的初次那个或者方法是私有的，不能在声明它的类外面访问，只能在本类内部访问使用。  
* protected修饰的属性或方法是受保护的，它和private类似，唯一的区别是可以在继承的类中访问，比如父类的protected成员为子类的protected成员，只允许子类成员访问。  
```js
class Person{
  public  name = "张三";
  private age = 20;
  protected gender = "男";
  // 内部访问
  public show() {
    console.log(this.name, this.age, this.gender)  // 张三 20 男
  }
}
let P = new Person()
console.log(P.name) // 张三
// console.log(P.age)  // 报错类型“typeof Person”上不存在属性“age”。
// console.log(P.gender) // 报错类型“typeof Person”上不存在属性“gender”。
P.show()
// 继承可访问protected
class Child extends Person{
  public run() {
    console.log(this.name)
    // console.log(this.age)  // 报错   属性“age”为私有属性，只能在类“Person”中访问
    console.log(this.gender)
  }
}
let children = new Child()
children.run()
```  
# 9. 类的接口约束  

在面向对象编程中，接口时一种规范的定义，它定义了行为和动作规范，在开发大型项目时通常采用面向对象的编程思路，那么就要用到接口约束，实现高内聚低耦合的代码规范。  
## 9.1 继承一个接口 
```js
// 定义接口
interface ISuperMan {
  age:number;
  name:string;
  fly:Function;
}
// 使用implements关键字继承类接口  
class Man implements ISuperMan {
  age:number = 30;
  name:string = "超人";
  fly() {
    console.log(this.name + "不会飞");
  }
}
let person = new Man();
person.fly();  // 超人不会飞
```  
## 9.2 继承多个接口  
```js
interface ISuperMan {
  name:string;
  age:number;
  fly:Function;
}
interface IFlashMan {
  run:() => void;
}
interface IIceKiller {
  ice:Function;
}
class Man2 implements ISuperMan, IFlashMan, IIceKiller {
  name:string = "合体";
  age:number = 12;
  fly() {
    console.log("不会跑");
  }
  run() {
    console.log("不会飞")
  }
  ice() {
    console.log("不会冰冻")
  }
}
```  
## 9.3 一个接口继承多个接口  
```js
interface ISuperMan {
  name:string;
  age:number;
  fly:Function;
}
interface IFlashMan {
  run:() => void;
}
interface IIceKiller {
  ice:Function;
}
interface Man extends ISuperMan, IFlashMan, IIceKiller {
  
}
```  
# 10. 泛型  
## 10.1 泛型定义
泛型是指定义在函数、接口或类的时候，不预先指定具体类型，而在使用的时候指定类型的一种特性，比如定义一个带有参数的函数，未来在调用这个函数时，出入的值类型不确定，有可能是string，也有可能是number，这时可以使用泛型来解决这样的问题。  
```js
function createArray<T>(ltenth:number, value:T):Array<T> {
  let arr = [];
  for (let i = 0; i < length; i++) {
    arr[i] = value;
  }
  return arr;
}
var strArray:string [] = createArray<string>(3, "1");  // 使用这个函数
console.log(strArray); // 结果：["1", "2", "3"]
var numArray:number [] = createArray<number>(3, 2); // 如果不传<number>可进行类型推断
console.log(numArray); // 结果：[2, 2, 2]
```  
## 10.2 多个泛型参数的函数  
```js
// 一个函数可以有多个泛型参数
function createMan<T, K>(name:T, age:K):[T, K] {
  return [name, age];
}
let result = createMan<string, number>("张三", 30);
console.log(result[0], result[1]); // 张三  30
```  
## 10.3 泛型接口  
在定义接口时，可以为接口中的属性或方法定义泛型类型，在使用接口时，指定具体的泛型类型。  
* 泛型接口在函数中的使用  
```js
interface ICreate {
  <T>(name:string, age T):string
}
let func: ICreate = function<T>(name:string, age:T):string {
  return name + "," + age
}
func<number>("李四", 20); // 李四,20
```  
## 10.4 泛型接口在类中的使用  
 ```js
// 定义泛型接口
interface IUser<T> {
  name:string;
  age:number;
  getUserInfo: () => T
}
// 创建一个类使用泛型接口
class User implements IUser<string> {
  public name:string;
  public age:number;
  constructor(name:string, age:number) {
    this.name = name;
    this.age = age;
  }
  getUserInfo() {
    return `姓名${this.name}, 年龄${this.age}`;
  }
}
let user = new User("张三", 30);
console.log(user.getUserInfo()); // 姓名张三，年龄30
```  
## 10.5 泛型类  
泛型类是在定义类时，为类中的属性或方法定义泛型类型，在创建类的实例时，再指定特定的泛型类型。  
```js
class Counter<T> {
  public num:T;
  total(prixe:T, amount: T) {
    return Number(price) * Number(amount); // 如果需要计算必须转成Number类型
  }
}
let ct1 = new Counter<number>();
ct1.num = 10;
ct1.total(100, ct1, num);

let ct2 = new Counter<string>();
ct2.num = "100";
ct2.total("200", ct2.num);
```  
## 10.6 泛型约束  
泛型约束是指确保泛型类型使用的参数是提供特定方法的类型，比如直接对一个泛型参数使用length属性或是用push()方法，会报错，因为这个泛型根本不知道它有这个属性或是这个方法，使用泛型约束可以解决这一问题。  
```js
interface IArrayFunc {
  // 可以在setArray函数中使用push()方法
  push:Function;
  // 可以在setArray中使用length属性
  length:number;
}
function setArray<T extends IArrayFunc>(data:T, value:string|number) {
  data.push(value);
  console.log(data); // [1, 2, 3, '4'];
  console.log(data.length); 
}
setArray([1, 2, 3, "4"]);
```    
# 11. 命名空间  
命名空间主要用于组织代码，避免命名冲突，解决重名的问题，在代码量较大的情况下，为了避免各种变量命名相冲突，可将相似功能的函数、类、接口等放置到命名空间内，TypeScript的命名空间使用namespace关键字创建，可以将代码包裹起来，如果需要在外部访问命名空间内的接口或是类，则需要在类和接口添加export关键字。  
```js
namespace A {
  export let message = "大家好";
  export class Person {
    public name:string = "张三";
    public say() {
      console.log("大家好，我是" + this.name);
    }
  }
}
console.log(A.message);
let person = new A.Person();
console.log(person.name);
person.say();
```