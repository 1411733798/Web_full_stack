# BOM

>Browser Object Model 浏览器对象模型

## window

> 是BOM对象的核心对象

* innerWidth

>浏览器的宽度：

* innerHeight

>浏览器的高度

* screen.width
> 屏幕宽度(分辨率)
* screen.height
>屏幕高度（分辨率）

window.innerWidth 浏览器宽度 //IE8及以下的浏览器不支持
window.innerHeight 浏览器高度
document.documentElement.clientWidth 浏览器的深度
document.documentElement.clientHeight 浏览器的高度
window.screenLeft浏览器距窗口左边的距离
window.screenTop浏览器距窗口顶部的距离

## window对象的方法

* alert

>弹出一段警示框

* confirm 
> 弹出带有一段消息以及确认按钮和取消按钮的对话框
* prompt
> 弹出一个可以输入内容的对话框
* open
>打开新的窗口
* close
>给关闭当前浏览器窗口

* scrollBy(x,y) 
>根据指定的偏移量滚动文档

* scrollTo(x,y)
>使文档滚动到指定的位置

#### 与时间相关的方法

* setInterval(callback,time)

>每隔一段时间执行一段代码，
>callback：要执行的代码，time：时间间隔

* ClearInterval(时间函数)
>清除时间函数
* setTimeout(callback,time)
>在指定时间后执行某一段代码
>callback：要执行的代码，time：时间间隔

* clearTimeout(名字)
>清除setTimeout

## ES5和ES6中的顶层对象和全局变量的区别

* 在 ES5中顶层对象的属性和全局变量是等价的

* 在ES6中顶层对象的属性和全局变量逐步的脱钩

```javascript
var a=1;
console.log(windows.a);//1给windows对象添加了a属性，属性值为1
let b=2;
console.log(windows.b);//undefined
```
>constructor:

对象的属性，用来返回对象的构造函数。用法：apple.constructor
>instanceof:

判断对象的构造函数 是，返回TRUE；不是，返回FALSE。 用法：对象 instanceof 构造函数 。
prototype：
构造函数的属性，json格式
存放公共属性和方法，解决构造函数，不能共享属性与方法的问题，造成资源浪费
原型.原型对象 (构造函数.prototype)
--proto--:
对象拥有的属性 
对象的--proto--属性，指向构造函数的原型对象。
通过--proto--形成原型链，实现继承
继承顺序：找自己-->构造函数-->原型对象-->...-->Object-->null***

### console对象

>console对象用于与浏览器控制台的一个链接，是windows的子对象

|方法名|内容|作用|
|:----:|:----:|:----:|
|log|msg|在控制台输出一段提示信息|
|dir|obj|在控制台对象的属性的和方法|
|error|msg|在控制台主输出一段错误信息|
|warn|msg|在控制台主输出一段警告信息|
|time|timename|开启一个计时器，记录一段代码执行所需的时间|
|timeEnd|timename|关闭一个由console.time()开启的计时器|
|table|第一个参数：对象或数组，第二个参数表示几列|在控制台输出一个表格|

### location对象

>是windows的子对象,用来保存当前文档的相关的一些信息，除了这些之外，他还将文档对应的地址解析为独立的片段，我们可以使用属性分别获取
> 一个完整的url地址包括9大部分、

>协议：//域名：端口号/路径？参数1&参数2#hash
 - 大部分网页具有三大部分：协议，域名，路径
* location对象的属性
>以http://www.baidu.com:80/javascript/001/BOM/?file=README.md#location对象这个链接为例


|属性名|作用|读写性|案例|
|:----:|:----:|:----:|:----:|
|href|包含整个url字符串|可读写|http://www.baidu.com:80/javascript/001/BOM/?file=README.md#location对象|
|protocal|包含url对应的协议最后只有一个s：|只读|http:|
|host|包含url地址的域名和端口号，如果没有端口号则只有域名|只读|www.baidu.com|
|port|包含域名的端口号|只读|80|
|pathname|包含url的路径的字符串|只读|/javascript/001/BOM/|
|search|包含的是url中的参数部分，以？开头|只读|?file=README.md|
|hash|包含一个标记的字符串，以#开头|只读|#location对象|
|origin|包含页面来源的域名的标准形式的字符串|只读|http://www.baidu.com:80|

# location对象的方法

|方法名|参数|返回值|作用|
|:----:|:----:|:----:|:----:|
|assign|url|undefined|加载给定url的页面资源|
|reload|boolean|undefined|重新加载当前页面的资源|
|replace|url|undefined|用给定的url替换原来的url|
|toString|无|包含整个URL的字符串|获取本窗口的url（只能获取，不能修改）最终获取的结果与location.herf相同|

- location.assign()和location.replace()的区别

>replace方法加载的页面不会被保存在会话的历史(history)中，这意味我们不能使用使用返回按钮返回这个页面

- location.reload()参数问题
>false或者没写参数：会检测服务器中的文档是否发生变化，如果发生变化就会重新加载这个文档，如果没有就从用户本地的存储中加载这个页面
>true:不论服务器的文档是否发生变化，都会绕过本地方存储的文档去重新加载服务器端的文档

# history对象

>history对象是windows的子对象
history可以存储用户的浏览历史记录，通过history可以实现单页面应用
* history属性

>length 包含当前页面在内的历史记录个数

* history方法

|方法名|参数|返回值|作用|
|:----:|:----:|:----:|:----:|
|back|无|undefiend|返回上一条历史记录|
|forward|无|undefined|返回历史记录中的下一条url|
|go|number|undefined|根据参数的不同实现不同的跳转效果|
|pushState|state,title,url|undefined|无刷新的向历史记录后面插入同一条记录|
|replaceState|state, title, url|undefined|无刷新的使用一条记录替换当前的历史记录|>ie9|
* history.go()
-参数为-1，返回上一条
-参数为1，进入下一条
-参数为0或不写，在当前页面进行刷新

# 总结

## 刷新当前页面的方法

* history.go(0)
* location.reload()

## 进入一个新的页面的方法

* windows.open(url)
* location.href="url';
* location.assign(url);
* location.replace（url）
//ctrl+shift+r  强制刷新
//ctrl+r 刷新