# DOM节点 //通过querseletor（）获得节点

## 节点的分类
 
* 元素节点(每一个html元素都是元素节点)
* 属性节点（每一个html属性）
* 文本节点（文本，空格，换行）
* 注释节点（HTML的注释）
* 文档节点 （DOM文档）

## 节点对应的属性

>通过节点的属性，能够获取到每个节点之间的关系，并且可以通过这种关系，准确快速的获取到相应节点的对象
|属性名|作用|
|:----:|:----:|
|parentNode|获取父节点|
|childNodes|获取子节点|
|firstNode|获取第一个子节点|
|lastNode|获取最后一个子节点|
|nextSibling|获取下一个兄弟节点|
|previousSibling|获取上一个兄弟节点|

> 上面的这些属性对我们而言没有更加实际的操作意义，所以我们需要使用下面的这些方法来获取要操作的元素节点

### 对元素节点的操作

|属性|方法|
|:----:|:----:|
|parentElement|获取父元素的节点|
|childern|获取所有的子元素节点|
|childernElementCount|获取的所有子元素的数量|
|firstElementChild|获取第一个子元素节点|
|lastElementChild|获取最后一个子元素节点|
|nextElementSibling|获取下一个兄弟元素节点|
|previousElementSibling}|获取上一个兄弟元素节点|

### 节点的方法

|方法名|作用|
|:----:|:----:|
|document.createElement()|创建一个元素节点|
|document.createTextNode()|创建一个文本节点|
|parent.appendChild(子节点)|插入一个子节点|
|parent.insertBefore(要插入的节点, 插入到某个元素之前)|插入到某个节点之前|
|parent.removeChild(子节点)|移除一个子节点|
|parent.replaceChild(新节点，被替换的节点)|替换一个节点|
|node.cloneNode(boolean)|克隆一个节点|