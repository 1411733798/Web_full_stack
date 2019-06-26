### 发展史
    网景公司

### JavaScript的作用
    1、嵌入动态文本于网页中
    2、对浏览器事件做响应
    3、读写html元素
    4、在数据提交到服务器之前的验证服务
    5、控制cookie，包括创建和修改
    6、基于node.js技术进行服务器端编程
    
### 语法特点
    基于对象和事件驱动的解释性松散型语言
    单线程/异步(callback)

  
> JavaScript一种直译式脚本语言，是一种动态类型、弱类型、（解释性、松散性）基于原型的语言，内置支持类型。它的解释器被称为JavaScript引擎，为浏览器的一部分，广泛用于客户端的脚本语言，用来给html网页增加动态功能。
 
### 组成部分
> ECMAScript (数据类型、运算符、流程控制、函数、面向对象)

> BOM (浏览器对象模型)调用浏览器接口功能

> DOM (文档对象模型)获取页面中所有的元素

### 引入方式

```引入css
@import "index.css"
link <style>  style=""
```

```引入js
    外部式<script src="index.js"></script>
    嵌入式<script></script>
    a链接<a href="javascript:;">点击</a>
    重定向
        <form action="alret("重定向");">
            <button>提交</button>
        </form>
    <p onclick="alert(123);">hello</p>
```

### 输出工具
    1、alert() 弹出对话框 
    2、console.log()输出至控制台
    3、document.write()输出到页面，可以解析html语法
    4、prompt(value,[default]);输入框 第一个值提示的信息，第二个值默认
    5、comfirm("string")带有确定和取消的对话框
    
#### 变量(可变的量)
    let与 var的区别：
        1.预解析  解析
        var存在变量提升现象 let不存在变量提升现象
        
    变量 —— 定义的四种方式：
    先声明后赋值 let a; a=1;
    声明的同时赋值 let a=1;
    
    一次声明多个后赋值let a,b; a=1,b=2;
    一次声明多个同时赋值let a=1,b=2,c=3;
    
    命名规范：变量的命名必须以 字母 数字 下划线或$开头，余下的部分也可以是字母 数字 下划线或$。 
        不能以数字开头
        不能使用关键字和保留字
        
    命名习惯：驼峰命名  首字母大写  命名要有意义
    
    const 命名并赋值
#### 常量
    使用const关键字声明一个常量，常量一旦声明不可改变，常量必须在声明的同时赋值
      

# 栈区：
    
> 初始类型 

    <1>undefined 声明变量但没有赋值
    <2>null  相当于一个占位符
             null 检测类型 object 
    <3>Number  整型
            浮点型
            二进制0b  八进制0o  十进制  十六进制0x
            十六进制 0 1 2 3 4 5 6 7 8 9 A B C D E F
            八进制 0 1 2 3 4 5 6 7
            二进制 0 1
            可以用科学计数法 10e10
            Number.MAX_VALUE最大值
            Number.MIN_VALUE最小值
            特殊值：
                NaN 非数字（数字类型）
                +0      -0
                
> number中包括正无穷和负无穷

```js
    console.log(1/0);//Infinty   
    console.log(-1/0);//-Infinty
```
    <4>String  
        语法  
            反引号`` ： 模板字符串
            双引号""
            单引号''
        用法：只能成对出现，不能相互交叉使用   可以相互嵌套
        字符编码 ASCII  GBK  GB2312  UTF-8  Unicode
        转义字符 \n换行  \t制表符  \b空格  \f换页符  \r回车 \'单引号 \""双引号  \\斜杠
    <5>Boolean  true / false
     
# 堆区：

> 引用类型

### 运算符
    算数运算符
    1、+ - * % ++ --  ==值相等   ===值和类型相等  !==    !===
    a++ 先用后加  ++a 先加后用
    + 拼接字符串
    console.log('as'+'cd'); // ascd
    
    2、赋值运算符
    =  +=  -=  *=  -= /=  %=
    += a+=10; a=a+10
    
    3、逻辑运算符
    &&   ||   ！
    短路原则：&&  (同真为真，有假为假)
             ||  (有真为真，同假为假)
    
    4、一元运算符
    typeof 测试数据类型
    +10 正数  -10负数  ++自增  --自减 
    new实例化对象  
    delete删除对象属性或变量
    
    5、三元运算符
    表达式 ? 为真执行项 : 为假执行项
    1>2 ? alert('1>2') : alert('2>1')
    
    算数运算符 > 关系运算符 > 逻辑运算符 > 赋值运算符
    
    6、特殊运算符
    () 有限运算  函数调用
    逗号
### 流程控制
> 顺序结构

> 分支结构

    <1>单路分支
    if(表达式){
        程序...
    }
    
    <2>双路分支
    if(表达式){
        程序1
    }else{
        程序2
    }
    
    <3>多路分支
    if(表达式1){
        程序1
    }else if(表达式2){
        程序2
    }else{
        程序3
    }
    
    switch(status){
        case '1':
            console.log('星期一')
            break
        case '2':
            console.log('星期二')
            break
    }
    
> 循环语句
    for  while  do while
    
    for(初始值;条件;步进值){
        
    }
    
    while(条件){
        循环体
    }
    
    do{
        循环体
    }while(条件)
    
    
> 干预循环
    continue 退出本次循环，直接进行下一次
    break  退出本次循环
    
动态类型、弱类型

## 数组(存储在堆区)
> 定义：包含一系列相关数据的集合。

> 语法：
> 创建数组
* 字面量的方式：
    let arr1 = [1,2,3,4,5,6];
    
* 实例化对象的方式：
    let arr2 = new Array(1,2,3,4,5,6);
    let arr3 = new Array(8); //指定了长度为8的数组

> 访问数组：arr[下标]

> 数组的长度：arr.length
   
> 数组的遍历：对数组元素进行依次访问

```js
let arr = [1,2,3,4,5];
//1
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
//2(value元素)
for(let value of arr){
    console.log(i);
}

//3 (index下标)
for(let index in arr){
    console.log(i);
}

```
> 数组的添加修改元素：
    arr.[index] = 10;

> 数组删除元素
arr.splice(index.length) 从index位置开始，删除length个元素
splice(下标，删除元素的个数，要添加的元素)

* 浅拷贝：(一维数组)

```js
    let arr1 = [1,2,3,4];
    let arr2 = [];
    for(let i=0;i<arr1.length;i++){
        arr2[i]=arr1[i];
    }
    arr2[0]='a'
    console.log(arr1)
    console.log(arr2)
```    
* 深拷贝：(多维数组)

```js
// 深拷贝 (二维的深拷贝)
    let arr1 = [[1, 2], [3, 4], [5, 6], [7, 8]];
    let arr2 = []
    for (let i = 0; i < arr1.length; i++) {
        let newArray = []
        for (let j = 0; j < arr1[i].length; j++) {
            newArray[j] = arr1[i][j]
        }
        arr2[i] = newArray
    }
    arr1[0][0] = 'a'
    console.log(arr2)


```

> 浅拷贝只是复制了对象的引用地址，两个对象指向同一个内存地址，所以修改其中任意的值，另一个值都会随之变化，这就是浅拷贝

> 深拷贝是将对象及值复制过来，两个对象修改其中任意的值另一个值不会改变，这就是深拷贝

............一维数组

> 二维数组
  遍历：
  
 ```js
  let arr = [[1, 2], [3, 4], [5, 6],[7, 8]];
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                console.log(arr[i][j])
            }
        }
```

### 函数
    定义：执行一个特定模块，将某些功能集合起来，方便以后重复调用的代码就是函数。
    优势：调用更加方便、维护更加容易、程序更加简洁、逻辑更加调理

1、 创建函数
    通过function关键字定义
    function 函数名字([形参]){
        函数体
        [return]   返回值
    }

2、调用函数
    函数名(实参)
    
    形式参数：创建函数时创建的参数，接受实参，以便于在函数内部使用。
    实际参数：调用函数时创建的参数，传递参数，将外部的数据传入函数体。
    
    默认参数：
    function fn(age='20'){}

    rest参数  可变参数
```
    function fn(a,b,...arr){  //rest操作符  rest参数  可变参数
        console.log(a,b,...arr)
    }
    fn(1,2,3,4,5,7,8,9)
```   
     参数注意：
    1、参数一一对应
    2、形参 > 实参  多出的形参为 undefined
    3、实参 > 形参  多出的实参从  arguments 接收
        arguments是对象   获取所有实参 
        reset 参数 获取剩余的参数
        普通函数的this指向window

```js                               
    function fn(a,b,c,d){
        console.log(arguments[4])
        console.log(a,b,c,d)
    }
    fn(1,2,3,4,5);
    //rest操作符  rest参数
    function fn(a,b,...arr){ 
            console.log(a,b,...arr)
        }
        fn(1,2,3,4,5,7,8,9)
``` 
#### 返回值：return（可以返回任意类型数据）
        1、终止函数，不要再return后继续写函数
        2、return 可以给函数一个返回值，在外部可直接使用
        3、返回值只能有一个
        4、在一个代码中，可以有多个return，但是只有一个被执行
        5、如果没有写return，默认是undefined
#### js是函数作用域
        作用域: 变量可作用的范围
        全局环境: windows全局环境,不在任何局部中
        局部环境: 函数内部都是局部环境
        全局变量: 在Windows环境中创建的变量,定义在全局环境的变量
        局部变量: 在函数内创建的变量,定义在局部环境中的变量
        
        注意: 局部环境可以调用全局变量,全局环境不可以调用局部变量

#### 作用域链:我们可以把作用域看成是链条链接起来,这样能够使函数有序的进行运行.
    es5 函数作用域
        var 全局作用域
        let 符合 块级作用域{ }

```js
    let name ='aa'
    function fn(){
        console.log(name) //暂时性死区
        let name='bb'   //let 绑定数据的作用
    }
```

#### 引用数据类型 Object
    包含相关属性和方法的集合，包括Function,Array,Object
    null Null  NULL 意义完全不同、
    js  科学计数法

```js
    let num = 3e5;//5表示5个0   3*100000
    console.log(num)
```

    symbol 唯一且不可改变
### 栈区：是一种先入后出的数据结构
    栈区存放的优点（我们的初始类型一般存放在栈区中）：数据长度是固定，访问速度很快

### 堆区：由编译器自动分配，用来存放函数的参数或者变量的值(局部变量)
    堆区：（一般引用数据类型存放在堆区）数据的长度不固定，访问速度较慢

    NaN与其他数据类型转换都是NaN
```js
    let num1 = 1234;
    num1 = num1 + '';
    console.log(num1) //123  typeof string

    let num = 1234;
    num = num / null;
    console.log(num)// infinity  无穷大

    x**y  x的y次方, 同 Math.pow(x,y)
    
    instanceof (判断对象是否由一个构造函数实例化)

    let arr = [1,2,3,4];
    console.log(...arr);//1,2,3,4
```
> for循环 与while循环的使用选择
    1、for循环必须知道循环次数，而while循环次数可以不确定
    2、所以在已知循环次数情况下使用for循环
    3、使用时优先考虑for循环，当无法写循环条件的起始结束进步值时考虑用while循环

### 函数的重载：
    函数根据传入参数的数量或者数据类型的不同，实现不同的功能，就叫做函数的重载。

```js   
    函数参数的默认值：
    function as(a,b){
        console.log(a,b);//undefined  undefined
        a = a || 1;
        b = b || 2;
        return(a *b);
    }
    as();

    let a =1;
    let b =2;
    let c =a&b;
    console.log(c);//2
```

# 函数高级
## 回调函数：
> 将一个函数的指针当做参数传给另一个参数，并且在调用这个参数的时候，那么这么函数就叫做回调函数。

* 回调函数的功能：
> 在一个功能执行完成以后在进行另外一个功能的执行。

```js
    // 在说完一段话之后再在控制台输出一段文本
    // 定义一个say函数用来说话，定义一个write函数输出文本到控制台
    function say(content,fn){
        console.log(fn);
        fn();
    }

    function say(content,fn){
        alert(content)
        fn();//表示的是write这个回调函数，所以要是实现函数的功能，需要调用fn这个函数
    }

    function write(){
        console.log("回调函数很重要")
    }
    say("学习回调函数",write);

```
## 递归函数
> 所谓递归函数就是在函数内部调用函数本身，但是使用的时候要注意，否则会陷入死循环。
***使用递归函数的时候一定要有一个终止条件***

```js
 // 递归函数的用法：求数字的阶乘   n的阶乘
    function jiecheng(num){
        if(num === 1){
            return num;
        }
        else{
            return num * jiecheng(num-1);
        }
    }
    let aa = jiecheng(5);
    console.log(aa); //120

```
## 闭包
> 闭包指的是在函数外部有权访问函数内部的变量，这个函数就称之为闭包函数。

```js
  function bibao(){
        let a = 100;
        return function(){
            return a;
        }
    }
    let b = bibao();
    console.log(b(bibao())); //100
```
### 闭包函数的应用：

* 函数只需要执行一次，其内部变量不需要维护
* 封装相关的功能集(jQuery)
* 可以读取函数内部的变量

### 闭包函数的弊端
> 闭包会使函数内部的变量暴露在内存中，导致内存空间的浪费。并且因为闭包将函数内部变量暴露出来，所以会导致内存的泄漏（ie浏览器中）。解决方法：在退出函数的时候将不用的变量删除。

## 块级作用域
> 在es5中没有块级作用域，所以下面代码的最终结果为10

```js
  for(var i=0;i<10;i++){
        // console.log(i)
    }
    console.log(i);//10
```
> 在es6中新增了块级作用域，所以下面的代码会报错

```js
  for(let i=0;i<10;i++){
        // console.log(i)
    }
    console.log(i);//i is not defined
```
* 块级作用域的表现形式
> 块级作用域由一对{}包裹，我们学习的if或者for中的{}都拥有块级作用域 (ES6中的let声明也拥有块级作用域)

## ES6解构赋值（新增）
>  在ES6中允许我们以一定的格式从数组或者对象中提取值对出来进行赋值，这个过程就叫解构赋值

* 用处
 - 在函数中接收参数
 - 接收参数的返回值
 - 函数的返回值只有一个会起作用，当有多个返回值的时候可以将它们放在一个数组中作为返回值
 

```js
    function fn([a,b,c]){
        return a+b+c;
    }
    let a=fn[1,2,3];
    console.log(a);
```

## ES6箭头函数
> ES6中新增了箭头函数来定义函数

```JS
    // () 也等同于 -
    // (参数1,参数2,...)=>{函数体}
```

* 箭头函数的作用

- 使函数变得更加简洁
- 简化回调函数

# 内置顶层函数
> 由JS预备好的可以在任意地方直接调用好的函数就叫做内置顶层函数（拥有全局的作用域）

## Number()
> 将任意数据类型转换为数值型

* true转为1，false，null转为0
* undefined转为NaN
* 字符串：

    1、如果字符串只包含数字，那么会转为字符串所对应的数值，并且会将无意义的前导0或者后道0去掉

    2、如果字符串是一个标准的浮点型，那么会转为对应的浮点型，并且会将无意义的前导0或者后导0去掉

    3、如果是空字符串转为0

    4、如果是其他的转为NaN

## parseInt()
> 将任意数据类型转为一个整数

* 如果一个字符串中只包含数字，会转为对应的数值型（整数）
* 如果字符串中有多个空格，会找到第一个不为空格的值进行转换
* 如果不是以'-数字' '空格' 开头的字符串，转为NaN
* 如果后面跟两个参数：第一个表示要转换的数据，第二个表示数据的进制。最终的转换结果为十进制。

## parseFloat()
> 将任意数据类型转为小数

* 小数点只有一个会起作用
* 如果字符串中是一个整数，那么返回整数本身，不会返回浮点数

## String()
> 将任意数据类型转为字符串

* null，undefined，true，false以及纯数字，转为它本身所对应的字符串

## Boolean()
> 将任意数据类型转为布尔值

* null，undefined，false，0，''，NaN转为false（假）
* 除了上面的六个以外，其它的都转为真(true)

## isNaN()
> 判断一个数据是否能够转为数值

* 如果能返回false，如果不能返回true
* isNaN(X)返回结果为false，那么X在任意算数表达式中都不会使结果为 NaN
* isNaN(X)返回结果为true，那么X在任意算数表达式中都不会使结果为 NaN

## eval()
> 将传入的字符串当成JS代码执行

* 避免在不必要的情况下使用eval
- 需要解析，执行速度慢
- 操作的字符串容易受到篡改，所以安全性较差

### 扩展 Number.isFinite()
> 判断一个值是否是有限的，如果是返回true，如果不是返回false
* Number.isFinite()用来检查一个值是否为有限的

### Number.isNaN()
> 判断一个值是否是NaN，一定与isNaN分开
* Number.isNaN()用来检查一个值是否是NaN

```js
console.log(isNaN('true'));//true
console.log(Number.isNaN('true'));//false
```

### Number.isInteger()
> 用来判断一个数据是否为整型
> 因为在JS中整型和浮点型的存储机制相同，20.0和20表示的是一个值

# 数据类型转换

## 强制类型转换
> 跟前面学习的内置顶层函数相关，使用内置顶层函数可以将数据强制转为另一中类型
* Number()强制转为数值型
* Boolean()强制转为布尔值
* String()强制转为字符串
* parseInt()强制转为整型
* parseFloat()强制转为浮点型

## 隐式转换类型
> 因为JS是一门弱类型的语言，所以在运算符两侧的数据可以是任意数据类型。任意数据类型可以进行运算就是因为JS引擎在解析的时候隐式帮助我们进行了数据类型的转换。

* 算数运算符
-    -*/%
> 会将运算符左右两侧的数据转为数值型进行运算（隐式调用Number()函数进行转换）
- +
> 字符串的拼接
> 非字符串类型在进行相加时规则和`-,*,/,%`相同

* 关系运算符

- 两个字符串进行比较，一次比较字符串的字符编码
- 除此以外，都会隐士的调用Number()函数进行数据转换，然后进行比较

* 逻辑运算符

-  &&  || ! 运算会隐式调用Boolean()函数,将运算符左右两侧的数据转为布尔值，再进行逻辑运算

* 语句

- if,while, do_while, 三元表达式的判断条件都会隐式调用Boolean()函数，按照这个函数的转换规则则转换为布尔值进行比较

# 对象（引用数据类型）
> 对象是一种引用数据类型,它的身上有很多的属性，是一个属性的无序集合

## 对象的组成部分
|名称|作用|
|:----:|:----:|
|属性|描述对象的状态|
|方法|当属性的属性值是一个函数的时候。我们称之为方法。方法用来描述对象的行为|

## 对象的创建

*  1、隐式创建  
> 使用json格式的对象
> let obj={ }

* 2、实例化Object构造函数
    let obj1 = new Object();

* 3、实例化自定义构造函数
```js
function  person(){ //自定义构造函数

}
//实例化
let student = new person();
```
* 4、实例化类 的方式

```js
class Person{

}
let obj = new Person();
```

## 对象属性的增删改查

### 增

* 在创建的同时进行属性的添加
* 先创建对象，通过`对象.属性名=属性值`来添加属性

### 改（更新）

* 通过`对象.属性名=新的属性值`等于一个新的属性值来进行属性的更新

### 查（查看）

* 通过`对象.属性名=属性值`进行属性的查看

### 删除

* 销毁对象（将整个对象进行销毁）
> 对象 = null;

* 删除对象的某一个属性
>delete 对象.属性

## 对象的遍历
> 通过对象将对象中每一个属性都获取到
* for...in

```js
let baicai = {
    name: '小白菜',
    age: 19,
    hobby: 'music'
}
for (let i in baicai) {
    // 对象的属性名保存在了一个变量i中，我们需要通过中括号[变量]访问对象的属性
    console.log(baicai[i])
}
```

## 对象的拷贝

* 浅拷贝
> 传址，只是将对象的存储地址进行了复制，如果原来的对象进行修改，会影响到拷贝之后的对象
> let newObj=0bj;

```js
    let animal = {
        name: 'sheep',
        sex: '母',
        color: 'white',
        age: 12,
        say(){
            console.log('咩咩！')
        }
    }
    let yang = animal;  //拷贝对象的地址
    animal.color = 'black';
    console.log(animal);
    console.log(yang)
```

* 深拷贝
> 传址，将对象的所以属性和方法放入到一个新的对象当中，当我们对原来对象进行修改的时候不会影响新对象
>实现深拷贝：利用递归函数的特性进行深拷贝

```js
    let animal = {
        name: '动物',
        age: 3,
        sex: '公',
        splies: '种类',
        say: function () {
            console.log('我是小鹿')
        },
        color: {
            color1: '#000',
            color1: '#fff',
            color1: '#666',
            special: {
                a: 1,
                b: 2,
                c: 3
            }
        },
        arr: [
            1, 2, 3, 5, 6, 8
        ] 
    }
    //深拷贝
    function deepCopy(obj) {
        let newObj = null; //用来放拷贝之后的对象
        if (typeof obj === "object" && typeof obj != null) {
            newObj = obj instanceof Array ? [] : {};//判断传进来的参数是一个数组还是一个普通对象
            for (let i in obj) {//判断对象的属性是否是一个对象
                newObj[i] = deepCopy(obj[i]);//对二、三、级对象进行拷贝
            }
        } else {
            newObj = obj;//对一级属性和方法进行拷贝
        }
        return newObj;
    }
    let a = deepCopy(animal);
    a.color.color1 = 'red';
    a.color.special = 999;
    a.arr[2] = 99;
    console.log(a);
    console.log(animal);

```
## ES6中新增的对象特性

### 对象特性的简写
> 当属性值保存在一个变量中，并且属性名与变量名相同，我们可以写一个。

> 在ES6中方法的形式可以进行简写
> 方法名(){函数体}

```js
    let username = '张三';
    let obj ={
        username,
        say(){
            alert('李四去哪了!')
        }
    }
    obj.say();//弹出框  李四去哪了!
    console.log(obj.username);//张三
```
## 对象的解构赋值
>

* 接收函数参数
* 接收函数的返回值

### 对象的rest参数

* 用于解构赋值
* 接收函数的参数


## this
> this是一个特殊的关键字，会被自动定义在所有的函数的作用域中
> this总是指一个对象，普通函数指向的是Windows对象，如果是一个构造函数，this指向对象本身。

* this指向问题（谁调用这个函数，this就指向谁）

- 在普通函数中this指向Windows全局对象
- 作为对象方法调用，this指待调用对象的方法
- 在构造函数中this指向构造函数的实例
- 在事件中，this指向事件源
- 在call和apply中，this指向我们设置的那个对象

## 封装
> 将对象的所有组成部分封装起来，尽可能地隐藏对象的部分细节，只提供有限的接口进行访问

### 封装的方法

* 工厂函数
> 将创建的对象以及对象的属性的添加都封装起来

``` js
    function Animal(name, sex, purpose) {
        let animal = {}
        animal.name = name;
        animal.sex = sex;
        animal.purpose = purpose;
        return animal;
    }
    let dog = Animal('哈士奇', 2, '拆家');
    console.log(dog)


```

* 通过构造函数的方式封装

```js
    function Person(name, sex, age, job) {
        this.name = name;
        this.sex = sex;
        this.age = age;
        this.job = job;
    }
    let actor = new Person('刘德华', 'boy', 30, '演员');
    console.log(actor);
    let student = new Person('刘小五', 'girl', 20, '学生');
    console.log(student);

```

### 原型
> 工厂函数以及构造函数在创建新的对象的时候会将所有的属性和方法在复制一遍放入到一个新的对象中，有一些公共的属性和方法会被重复保存，导致内存的负荷量增大。
> 为了解决这个问题，JS为我们提供了原型的概念---原型用来存储对象中公共的属性或方法。

* 原型的分类
    - 构造函数的原型 ---prototype
    - 对象的原型---__proto__

```js

    function Person(name, sex, age, job) {
        this.name = name;
        this.sex = sex;
        this.age = age;
        this.job = job;
    }
    Person.prototype = {
        say() {
            console.log('我会唱歌！');
        },
        foods() {
            console.log('我喜欢美食！');
        }
    }
    let actor = new Person('刘德华', 'boy', 30, '演员');
    console.log(actor);
    actor.say();
    actor.foods();

```
### new操作符具体操作

* 创建了一个空对象
* 将构造函数中的私有属性和方法放在这个空的对象中
* 将构造函数原型prototype中的公共属性和方法放在这个对象的原型__proto__中

## 继承
> 在JS中，基于一个对象创建一个新的对象，新对象拥有原对象的属性和方法，这个就叫做继承。

### 实现继承的方式

* 原型继承
> 通过将父对象的构造函数的实例放在子对象的原型中，实现继承。

```js
    function Person(name, sex, age, job) {
        this.name = name;
        this.sex = sex;
        this.age = age;
        this.job = job;
    }
    Person.prototype = {
        say() {
            console.log('我会唱歌！');
        },
        foods() {
            console.log('我喜欢美食！');
        }
    }
    function farther() {
        this.name = '佚名',
        this.brother = 2,
        this.age = 30
    }
    farther.prototype = new Person(); 
    let son = new farther();
    console.log(son.brother);
    son.say()

```

* call实现继承
> 将父对象的某一个方法暂时借给子对象，并且会立即执行
> 将父对象的构造函数整个都继承给子对象

```js
    function anminal() {
        this.say = function (a,b,c) {
            alert('我是'+a+'今年'+b+'岁了，我是'+c+'！')
        }
    }
    function cat() {
        this.fly = function () {
            alert('我是波斯猫！')
        }
    }
    anminal.prototype = new cat();
    let bird = new anminal();
    anminal.call();
    bird.say("哈士奇",9,"最聪明的");
    bird.fly();
```


* apply实现继承
> 用法与call相同
> 不同的是apply传递参数的时候会将参数放在一个数组中传递，call会将参数一个一个用逗号隔开进行传递。

```js
    function anminal() {
        this.say = function (a, b, c) {
            alert('我是' + a + '今年' + b + '我是' + c + '！')
        }
    }
    function cat() {
        this.fly = function () {
            alert('飞的更高！')
        }
    }
    anminal.prototype = new cat();
    let bird = new anminal();
    anminal.apply();
    bird.say(["哈士奇"],[9],['最聪明']);
    bird.fly();

```

* bind实现继承
>bind用法与call，apply相同，不同的是bind不能继承整个构造函数。bind的继承结果会返回函数的本身，不会立即执行
> bind符合我们正常的需求，就可以将继承的方法保存，当我们需要的时候再进行调用

```js
    function anminal() {
        this.say = function (a, b, c) {
            alert('我是' + a + '今年' + b + '我是' + c + '！')
        }
    }
    function cat() {
        this.fly = function () {
            alert('飞的更高！')
        }
    }
    var bird = new anminal();
    var caa = new cat();
    bird.say.bind(cat,["哈士奇"], [9], ['最聪明'])();
```

### 访问对象的属性或方法的顺序
> 对象本身 => 构造函数=>构造函数的原型 => 构造函数的原型的构造函数 => 构造函数原型的构造函数的原型.... => object，如果都没有这个产生错误（如果访问的属性，返回undefined；如果是方法，返回错误）

### 原型链
> 访问对象的属性或方法时，会从对象的本身开始，去寻找，如果没有去原型中去寻找，一层一层的往上去找，直到找到object，null结束，这个过程我们就叫原型链

# JS原生对象
> 由JS为我们准备好的可以直接使用的对象
>Array对象、String对象、Object对象、Math对象、Date对象、正则对象
 
## Array对象
> 数组对象有一些我们常用到的属性和方法

### 属性

* length: 数组的长度，用来表示数组元素的个数
* constructor: 保存构造函数

### 方法

* arr.push(元素)
> 往数组的末尾添加一个或多个元素
> 返回值是修改后的数组长度
> 会修改原数组

```js
    let arr= [1,2,3,4]
    let a = arr.push(1,2,3)
    console.log(a);//7
    console.log(arr//[1, 2, 3, 4, 1, 2, 3])
```

* arr.unshift(元素)
> 往数组的开头添加一个或多个元素
> 返回值是修改后的数组长度
> 会修改原数组

```js
    let arr= [1,2,3,4]
    let a = arr.unshift(1,2,3)
    console.log(a);//7
    console.log(arr);// [1, 2, 3, 1, 2, 3, 4]
```

* arr.pop()
> 从数组的末尾删除一个元素
> 返回值是被删除的元素
> 会修改原数组（只能删除一个）

```js
   let a= [1,2,3,4]
        let b=a.pop()
        console.log(b)//4
        console.log(a)//[1, 2, 3]
```

* arr.shift()
> 从数组的开头删除一个元素
> 返回值是被删除的元素
> 会修改原数组（只能删除一个）

```js
    let arr= [1,2,3,4]
    let rr = arr.shift()
    console.log(rr)//1
    console.log(arr)//[2, 3, 4]
```

* arr.splice(起始下标，删除的长度，添加的元素);万能的增删改
> 有三个参数表示起始下标，删除的长度，添加的元素（可以是任意类型的数据）
不会对原数组造成影响
返回值是被删除的元素组成的数组
添加可以将删除的长度为0，协商添加的元素


* arr.join(分隔符)将数组转成字符串
> 可以将原数组转为分隔符隔开的字符串
> 对原数组没有影响
> 返回值是一个字符串

```js
    let arr = [1, 2, 3, 4, 5, 6];
    let a=arr.join("-");
    console.log(a)//1-2-3-4-5-6
    console.log(arr)//[1, 2, 3, 4, 5, 6]
```

* arr.slice(起始下标，结束下标)
> 用于数组的截取，截取的内容包含起始下标，不包含结束下标

> 返回值是截取的数组

> 对原元素数组没有影响
> 参数可以是负数，表示从倒数第几个开始，到倒数第几个结束
> 如果只有一个起始下标，那么从起始位置开始到最后都会被截取

```js
    let arr = [1, 2, 3, 4, 5, 6];
    let a=arr.slice(1, 3);
    console.log(a);//[2, 3]
    console.log(arr)//[1, 2, 3, 4, 5, 6]
```

* arr.concat()
> 用于多个数组的拼接
> 参数可以是拼接后的新数组
> 不会对原数组造成影响

* arr.indexOf()
> 查找一个元素在数组中第一次出现的位置
> 返回值是元素对应的下标，如果这个元素不存在返回-1

* arr.lastIndexOf()
> 倒序查找一个元素在数组中第一次出现的位置
> 返回值是元素对应的下标，如果这个元素不存在返回-1

* arr.sort()
> 用于数组排序，如果没有参数，默认按照元素的字符编码排列
> 如果有参数，参数必须是函数（回调函数），函数有两个参数a,b(a-b表示升序，b-a倒序)
> 会修改原数组

```js
    let arr = [4, 5, 6, 1, 2, 4, 7, 8]
    let a=arr.sort((a,b)=>{
        return b-a;
    })
    console.log(a)

    //数组乱序
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    arr.sort(() => Math.random() - 0.5)
    console.log(arr);
```


 * arr.forEach()
 > 用于数组遍历
 > 参数是一个回调函数，回调函数有两个参数，第一个表示数组元素，第二个表示数组下标
 > 没有返回值，默认是undefined
 > 对原数组没有影响

 ```js
    let arr = [4, 5, 6, 1, 2, 4, 7, 8]
    arr.forEach((v, i) => {
        console.log(arr)
    })
```

 * arr.filter()
 > 用于数组过滤，按照回调函数的条件进行过滤筛选
 > 参数是回调函数，回调函数有两个参数，第一个表示数组元素，第二个表示数组下标（回调函数必须有返回值，返回一个筛选的条件）

```js
    let arr = [4, 5, 6, 1, 2, 4, 7, 8]
    let a=arr.filter((v,i)=>{
        return v>3;
    })
    console.log(a)
```
*  arr.map()
 > 数组映射，按照回调函数的结果将数组元素放大或放小
 > 参数是回调函数，回调函数有两个参数，第一个表示数组元素，第二个表示数组下标（回调函数必须有返回值，返回一个映射条件）

```js
    let arr = [4, 5, 6, 1, 2, 4, 7, 8]
    let a = arr.map((v, i) => {
        return v * 3;
    })
    console.log(a)
```

* arr.some()
> 判断是否存在一个满足条件的元素，存在返回true，不存在返回false
> 参数是回调函数，回调函数有两个参数，第一个表示数组元素，第二个表示数组下标（回调函数必须有返回值，返回一个判断条件）

```js
    let arr = [1,2,3,4,5,6,7];
    let a = arr.some((v,i)=>{
        return v>6
    })
    console.log(a)//true
```
* arr.every()
> 判断数组每一个元素是否都满足条件，满足返回true，有一个不满足返回false
> 参数是回调函数，回调函数有两个参数，第一个表示数组元素，第二个表示数组下标（回调函数必须有返回值，返回一个判断条件）

```js
    let arr = [1,2,3,4,5,6,7];
    let a = arr.every((v,i)=>{
        return v>6
    })
    console.log(a)//false
```
* arr.reverse()
> 数组倒序

```js
    let arr = [1,2,3,4,5,6,7];
    arr.reverse()
    console.log(arr)//[7, 6, 5, 4, 3, 2, 1]
```

* arr.includes()
> 判断一个数据是否存在于数组中，存在返回true，不存在返回false
> 可以有两个参数，第一个表示被检索的元素，第二个是检索开始的位置

```js
    let arr = [1, 2, 3, 4, 5, 6, 7];
    let a = arr.includes(3)
    let b = arr.includes(22)
    console.log(a)//true
    console.log(b)//false

//检索数组
    let obj = { a: 10 };
    let arr = [1, 2, 3, 4, 5, 6, 7, obj];
    let a = arr.includes(obj);
    console.log(a)//true
```

## String对象
> 使用单引号或者双引号包裹起来的的内容就是一个字符串
> 单引号可以互相嵌套，但是不能交叉使用，单引号不能嵌套双引号，双引号不能嵌套双引号

### 字符串对象的属性
> length --- 表示字符串的长度（字符个数）

* str.charAt(index)
> 返回字符串中下标所对应的字符
> 参数是下标（数字）
> 返回值是对应的字符
> 不会影响原数组

* str.charCodeAt(index)
> 返回字符串中下标对应的字符的ASCII编码
> 参数是下标（数字）
> 返回值是对应的字符串的ASCII编码
> 不会影响原数组

* String.fromCharCode(ASCII)
> 返回ASCII编码对应的字符，一般用于字符与数字之间的转换
> 参数是ASCII编码
> 返回值是编码对应的字符

* str.indexOf()
> 返回字符在字符串中第一次出现的位置（从左往右）
> 参数是需要寻找的字符
> 返回值是对应的下标
> 如果不存在返回-1

* str.lastIndexOf()
> 返回字符在字符串中第一次出现的位置（从后往前）
> 参数是需要寻找的字符
> 返回值是对应的下标
> 如果不存在返回-1

* str.replace(替换的字符，替换后的字符)
> 将匹配到的字符内进行替换
> 参数1：被替换的内容
> 参数2：替换后的内容
> replace支持正则匹配

* str.slice()
> 截取对应的字符
> 参数1：截取开始的位置
> 参数2：截取结束的位置
> 截取的内容包括开始位置，不包括结束的位置
> 支持负数

* str.substring()
> 截取对应的字符
> 参数1：截取开始的位置
> 参数2：截取结束的位置
> 截取的内容包括开始位置，不包括结束的位置

* str.substr()
> 根据截取的字符长度进行截取
> 参数1；截取的开始位置
> 参数2：截取的字符长度

* str.split()
> 根据给定字符字符串分割成一个数组
> 参数是分隔符
> 返回值是一个分隔符后的字符组成的数组，被用作分隔符的字符串不会出现在数组中

* str.toLowerCase()
> 将字符串中的字符转为小写

* str.toUpperCase()
> 将字符串的字符转为写大写

* str.tirm()
> 去除字符串前后的空格

* str.match()
> 检索指定的字符串，并将它放在一个数组中
> 参数：被检索的字符串
> 返回值：数组
> 支持正则查找

* str.concat()
> 用于连接一个或多个字符串
> 参数：被连接的字符串
> 返回值：连接之后的字符串
> 对原字符串没有影响

* str.padStart(),str.padEnd()
> 在字符串的开头或末尾添加字符到给定的字符串长度
> 参数1；新字符串的目标长度，如果目标长度小于或等于字符串的长度，那么返回字符串本身，不会添加字符
> 参数2：要添加的字符，若果参数2为空，默认使用空格添加
> 返回值：添加后的字符串

### 对象与字符串之间的转化

* JSON.stringfy(对象) =>  将对象转化为一个字符串

* JSON.parse(字符串)  => 将字符串转为一个对象

* 用处： 可以进行深拷贝（除了方法以外）

## Math对象
> 数学对象可以帮助我们进行一些数学运算
> 执行常见的算数运算

### 数学对象的属性

|属性|作用|
|:---:|:---:|
|PI|圆周率|
|E|常数e，自然数对数的底数|
|LN2|2的自然对数，以e为底2的对数|
|LN10| 10的自然对数，以e为底10的对数|
|log2E|以2为底,e的对数|
|log10E|以10为底,e的对数|
|SQRT2|2的平方根|
|SQRT1-2|2的平方根的倒数|

### 数学对象的方法

|属性|作用|
|:---:|:---:|
|Math.round()|四舍五入|
|Math.ceil()|向上取整|
|Math.floor()|向下取整|
|Math.random()|取0-1之间的随机数|
|Math.pow(x,y)|求x的y次幂|
|Math.max()|求最大值|
|Math.min()|求最小值|
|numObj.toFixed(num)|保留指定的小数位数|

* 获取x-y之间的随机数
> Math,random() * (y-x) + x

* 获取x-y之间的随机整数
> Math.floor(Math.random() * (y-x) + x )


# BOM
> Browser Object Model  浏览器对象模型

> 为我们提供了一些操作浏览器窗口的接口

## window
> window对象是BOM的核心

|属性|作用|
|:---:|:---:|
|innerWidth|窗口的宽度|
|innerHeight|窗口的高度|
|screenWidth|屏幕的分辨率|
|screenHeigth|屏幕的分辨率|
|top|返回窗口中最顶层引用|

### 方法

|属性|作用|
|:---:|:---:|
|alert|弹出带有一段文本的警告框|
|confirm|弹出确认与取消的对话框|
|prompt|弹出一个输入框|
|open|通过你的脚本打开一个页面|
|close|关闭当前页面|
|scroolBy|按照指定的偏移量移动文档|
|scroolTo|使文档滚动到指定的位置|
|setInterval|时间函数，每过一段时间执行一次代码|
|clearInterval|清除由setInterval开启的定时器|
|setTimeout|计时器，过一段时间之后再执行代码|
|clearTimeout|清除由setTimeout开启的定时器|

hash  哈希 表示当前页面的一个标识符

## console
> 是Windows对象的子对象，包含当前页面的加载的所有信息，除了这些信息之外location还将当前页面的URL解析为块，我们可以根据属性去访问路径不同的块。

### location对象的属性
> 以‘http://www.baidu.com:80/javascript/001/BOM/?file=README.md#location对象’这个URL为例

> 一个完整的网页URL包含9个部分
协议:// 用户名:密码@域名 : 端口号 / URL路径?search(参数)#hash(标识)             


|属性|作用|案例|
|:---:|:---:|:---:|
|href|返回整个网页URL地址的字符串|http://www.baidu.com:80/javascript/001/BOM/?file=README.md#location对象|
|origin|返回包含协议域名域名端口号的字符串|http://www.baidu.com:80|
|protocol|返回网页协议的字符串|http:|
|host|包含域名和端口号的字符串|http://www.baidu.com:80|
|hostname|包含域名的字符串|www.baidu.com|
|port|端口号的字符串|80:|
|pathname|网页的路径|/javascript/001/BOM|
|search|url参数部分，开头是?|?file=READEME.md|
|hash|网页的标识符#开头|#location对象|

### location对象的方法
 
|名字|参数|作用|
|:---:|:---:|:---:|
|assign|url|加载给定URL地址的资源|
|reload|boolean|重新加载当前页面的资源|
|replace|url|用给定URL的资源替换当前页的资源|
|tostring|无|返回包含整个URL地址的字符串，功能与location.href相同，但获取的地址不能修改|

***reload参数：当参数为false或不写时，页面会根据服务器确定当前页面的资源是否进行了更新，如果更新就重新加载，如果没有就使用本地的存储进行刷新，当参数为true时，无论页面资源是否更新都会从服务器重新加载页面资源***

assign  reload  location.href  open 打开网页四种方式

## history对象

> 是Windows对象的子对象 保存当前页的所有历史记录

### history的属性：

> length：返回当前页面的历史记录的个数

### history的方法：

|名字|参数|功能|
|:---:|:---:|:---:|
|back|无|返回到历史记录的上一个URL，等价于history.go(-1)|
|forward|无|记录历史记录中的下一个URL,等价于history.go(1)|
|go|number|通过当前页面的相对位置加载不同的历史记录|
|pushState|sate,title,url|无刷新的向历史记录的最前方插入一条历史记录|
|replaceState|sate,title,url|无刷新的将历史记录替换成新的历史记录|


***history.go()参数：参数为-1，返回到上一页面；参数为1：进入到下一个页面；参数为0：刷新页面***

# DOM文档对象模型
> Document Object Model
> 提供了操作文档的接口（API）

## DOM的属性

* URL：返回网页的地址url
* chartset: 返回字符集
* title: 返回网页的的标题
* forms：返回网页所有的form标签
* imgages: 返回网页所有的ing标签
* body：返回body标签，包含标签的其他内容
* head：返回head标签，包含标签的其他内容
* documentElement：返回html标签，包含其他内容的所有内容
* cookie：返回当前页面的cookie，是一个字符串

## DOM方法

* document.write()：在页面中写入内容（识别标签）
* document.getElementsByTagName（标签名）：根据标签名获取html元素
* document.getElementsByClassName（类名）：根据类名获取html元素
* document.getElementById（id名）：通过ID名获取元素
* document.getElementsByClassName（name）：通过name 的属性值来获取html元素，返回值是一个Nodelist：节点集合
* document.querySelectorAll(css选择器)：通过css选择器获取html元素（结果是一个节点集合）
* document.querySelector(css选择器)：通过css选择器获取html元素（结果是单一的元素节点）

##  DOM操作元素样式的方法

> 元素.style.样式名="样式值";
* 元素.style.cssText="css样式组成的字符串"
* 获取的元素的样式：window.getComputedStyle(元素对象)

操作元素的内容：
* 元素.innerHTML
> 获取或修改元素的内容,识别标签

* 元素.innerText
> 获取或修改元素的文本内容,只识别文本

* 元素.textContent
> 获取或修改元素的文本内容，保留文本的格式

## 操作标签的属性
一、操作标签自带的属性

* 元素.属性名='属性值'

* 获取或修改元素的类名
> 元素.className="";

* form表单中的name属性
> input name="";

### 操作元素的类名
添加类名
元素.className='类名'
元素.classlist.add('类名')

移出类名
元素.classlist.remove('类名')
元素.classList='';  清空类名

自定义属性

设置属性
> 对象.setAttribute ("自定义属性名","自定义属性值")

> 获取属性
对象.getAttribute ("自定义属性名")

> 判断自定义属性是否存在
对象.hasAttribute('自定义属性名')

> 移出自定义属性名
对象.removeAttribute ("自定义属性名")



***页面常见的效果：选项卡、轮播图、按需加载、楼层跳转、返回顶部***

## 元素的位置尺寸

### 元素的偏移量 ***
* offsetWidth：元素的实际宽度
* offsetHeight：元素的实际高度
* offsetTop：元素的左上角距离最近的具有定位属性的祖先元素的左上角的垂直距离
* offsetLeft：元素的左上角距离最近的具有定位属性的祖先元素的左上角的水平距离
* offsetparent:距离元素最近的具有定位属性的祖先元素

***上面的几种方法只读，不能修改，返回的是具体的数组***

* 元素.getBoundingClientRect
> 返回元素的所有相关位置尺寸的信息

|返回值|作用|
|:---:|:---:|
|x/y|元素的左上角和视口的左上角的的距离|
|bottom|元素的下边距离视口的上边距离|
|top|元素的上边距离视口的上边距离|
|left|元素的左边距离视口的左边距离|
|right|元素的右边距离视口的右边距离|
|width|元素的实际宽度|
|height|元素的实际高度|

### 滚动条的位置*** 
* 对象.scroolTop: 内部元素超出元素顶部的距离
* 对象.scroolLeft: 内部元素超出元素左侧的距离

### 元素的内尺寸

* clientWidth/clientHeight: 元素去除边框的宽度/高度
* clientTop/clientLeft: 元素的上边框和左边框的高度

### 页面的实际大小

* document.documentElement.scroolWidth
* document.documentElement.scroolHeight

### 窗口左上角距离屏幕左上角的距离 ***

 * window.scroolX
 * window.scroolY

### 屏幕的高度

* window.screen.width
* window.screen.height

### 窗口的内宽 ***

* window.innerWidth
* window.innerHeight

### 窗口的外宽，内高
* window.outerWidth
* window.outerHeight

user-select: none;不让文字选中
-webkit-user-drag: none; 不让图片拖拽


## DOM节点

文档树：
    元素节点 属性节点  文本节点 注释节点
    元素：HTML—— head (title/meta/link) / body(div/img/span)
    属性：class src href...
    文本：DOM所有的文本
    注释：页面中的注释

### 节点的分类

* 元素节点：HTML中的元素
* 属性节点：HTML中的属性
* 文本节点：HTML中的文本
* 注释节点：HTML中的注释
* 文档节点：DOM

### 节点的详细信息
> 通过节点的名称，类型，内容可以方便我们更好的操作节点

|节点|节点名称(nodeName)|节点类型(nodeType)|节点内容(nodeValue)|
|:---:|:---:|:---:|:---:|
|元素节点|大写的标签名|1|null|
|属性节点|属性名|2|属性值|
|文本节点|#text|3|文本|
|注释节点|#comment|8|注释的文本|
|文档节点|#document|9|null|

### 节点的属性

* node.parentNode
> 获取父节点

* node.childrenNode
> 获取所有的子节点（包括元素，文本，注释）

* node.firstChild
> 获取第一个子节点

* node.lastChild
> 获取最后一个子节点

* node.nextSibling
> 获取下一个兄弟节点

* node.previousSibling
> 获取前一个兄弟子节点

在我们正常的代码书写中，操作的是元素，所以我们获取的是元素的节点，所以js为我们提供了用来专门获取元素节点的属性

* ele.parentElement
> 获取元素的父元素的节点

* parentNode.children
> 获取所有的子节点的元素

* parentNode.firstElementChild
> 获取第一个子节点的元素

* parentNode.lastElementChild
> 获取最后一个子节点的元素

* ele.nextElementSibling
> 获取下一个兄弟元素的节点

* ele.previousElementSibing
> 获取上一个兄弟元素的节点

* parentNode.childElementCount
> 获取子元素节点的数量

## 节点的方法

* document.createElement('标签名')
> 创建一个元素节点
 
* document.appendChild(子元素节点)
> 给父元素的最后插入一个子元素节点

* parent.inserBefore(要插入的节点，被插入的节点)
> 在某一个节点前面插入子元素节点

* parent.removeChild(子元素节点)
> 移出某一个子元素节点

* parent.replaceChild(要替换的节点，被替换的节点)
> 替换子元素节点

* node.cloneNode(boolean)
> 克隆节点，如果参数为true会将元素中的文本一起克隆，如果是false只克隆节点，不克隆内容

* document.creatTextNode("文本")
> 创建文本节点



# 事件基础
### 事件三要素
> 能够被JS检测到行为就叫事件，比如鼠标单击，双击，键盘按下等

* 事件源：触发事件的目标
* 事件：触发事件的本身
* 事件处理程序：一般是一个函数，用于处理事件触发后的操作

### 常见的事件

#### 鼠标事件

* onclick 点击
* ondblclick 双击
* onmousedown 鼠标按下
* ommouseup 鼠标抬起
* ommouseover 移出
* onmouseout 移出
* onmouseenter 移入
* onmouseleave 移出
* onmousemove 移动
* ontexemenu 右键

### 键盘事件

* onkeydown 按下
* onkeyup 抬起
* onkeypress 按下，只有数字能触发


### 绑定事件的方式

* 在HTML中开始标签中绑定
* 给DOM元素绑定事件

### 事件高级

### 事件监听
给一个事件添加多个事件处理程序

* 添加事件监听
* 元素.addEventListener(事件,callback,boolean)
- 事件：要监听的事件，前面没有on
- 回调函数：事件处理函数
- boolean:true支持捕获型事件流，false支持冒泡性事件流。默认是false

* 移出事件监听

* 元素.removeEventListener(事件,callback,boolean)
- 事件：要监听的事件，前面没有on
- 回调函数：事件处理函数（使用removeEventListener移出事件监听，事件处理函数必须是一个具有函数，不能使用匿名函数）
- boolean: true支持捕获型事件流，false支持冒泡性事件流,默认是false

### 事件流
> 事件发生时，会在元素节点和根节点之间以某种方式进行传递，在这个过程中的所有的节点都会接受这个事件，这就叫DOM事件流。

### 事件流的分类
> 冒泡型事件流：从最明确的事件源到不明确的事件源
> 捕获型事件流：从最不明确的事件源到明确的事件源

* 事件对象
> 在事件发生的时候，用来保存事件相关信息的事件的对象，时间处理函数的第一个参数就是事件对象

* 阻止浏览器的默认行为的方法
> e.preventDefault()

* 阻止事件流的方法
> e.stropPropagation()











