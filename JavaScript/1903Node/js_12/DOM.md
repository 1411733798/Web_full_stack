# DOM

>Docunment Object Model
>文档对象模型
>DOM通过文档树（节点树的形式来表示文档，由一个又一个的节点组成）

## 节点

* 节点分类
- 文档节点
- 元素节点 ：html中的标签（元素）
- 文本节点：html中的文本
- 属性节点：html中的属性（href，src，title）
- 注释节点；html中的注释

### 属性

|属性名|作用|可读性|
|:----:|:----:|:----:|
|URL|获取文档的url|只读|
|charset|获取文档当中的字符集|只读|
|title|获取文档中的标题|只读|
|form|获取文档当中所有的form标签（放在一个类数组的集合中），访问元素需要使用下标|只读|
|image|获取文档当中所有的img标签（放在一个类数组的集合中），访问元素需要使用下标|只读|
|body|获取文档中的body元素|只读|
|head|获取文档的head元素|只读|
|cookie|获取文档中的cookie值，值是一个字符串|读写|

### DOM方法 

|方法名|参数|作用|兼容性|
|:----:|:----:|:----:|:----:|
|write|文本或带标签的字符串|向页面中写入一段文本或者标签|>=IE6,Chorme,Firefox|
|getElementsByTagName|标签名|获取html标签对应的元素集合|>=IE6,Chorme,Firefox|
|getElementsByClassName|类名的字符串|获取html类名对应的元素集合|>=IE8,Chorme,Firefox|
|getElementById|id名|获取html具有相应的id名的元素|>=IE6,Chorme,Firefox|
|getElementsByName|name属性的名字|获取name属性对应元素集合|>=IE6,Chorme,Firefox|
|querySelector|选择器|获取相对应的节点|>=IE8,Chorme,Firefox|
|querySelectorAll|选择器|获取相对应的节点的集合|>=IE8,Chorme,Firefox|  //节点类数组Nodelist[]

### 操作元素

* 属性 
- innerHtml:可读取，可修改，向页面中写入文本或者标签
- innerText：可读取，可修改，向页面中写入是纯文本
- TextContent：可读取，可修改，向页面中写入纯文本，保留文本格式

* 操作样式

- 修改类名或者id

>对象.classname获取或者修改DOM对象的类名
- classlist操作DOM对象的类名

|方法|作用|
|:----:|:----:|
|classList.add(类名)|在不修改原来类名的基础上添加一个或者多个类名
|classList.remove(类名)|移除某类名|
|classList.toggle(类名)|切换类名，如果有就移除，如果没有就添加|
|classList.contains（类名）|判断某类类名是否存在,如果有就返回true，否则返回false|

* 给元素添加或删除样式

> DOM对象.style.属性名="属性值"；

> DOM对象.style.属性名=“none”用于删除某个属性

***当样式名作为对象的属性名时，样式名需要使用驼峰命名法，因为对象的属性名不能包含- 例如：fontSize***