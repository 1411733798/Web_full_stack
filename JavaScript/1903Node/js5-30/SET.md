# Set是一个数组，数组里面的元素是唯一的
# 对象当中+0和-0， NAN和NAN相等
Set中NAN和NAN不相等
* 一个动物不是人，另一个动物也不是人，这两个动物不相等

# size，成员的个数

Set && WeakSet
Set兼容性

Set 基本用法
该数据结构，类似于数组，但是，它的成员都是唯一的。

var s = new Set();
[2, 3, 3, 5, 4, 5].map(x => {  //映射
s.add(x);
console.log(s);
});
// Set {2}
// Set {2, 3}
// Set {2, 3}
// Set {2, 3, 5}
// Set {2, 3, 5, 4}
// Set {2, 3, 5, 4}
在Set()函数中可以传入一个数组类型的参数。

var set = new Set([3,5,1,1,4]);
console.log([...set]);    // [3,5,1,4]
console.log(set.size);    // 4
在set中，判断是否重复，使用的是"Same-value equality",类似于"===",但是有例外，其中NaN不等于NaN。

var set = new Set();
set.add(NaN);
set.add(NaN);
set.add("1");
set.add(1);
console.log(set) // Set {NaN, "1", 1}
Set 实例的属性和方法
属性
Set.prototype.constructor：构造函数，默认是 Set 函数。
Set.prototype.size：返回 Set 实例的成员总数。
方法
操作方法
方法	描述
add(value)	添加某个值，返回Set结构本身。
delete(value)	删除某个值，返回一个布尔值，表示删除是否成功。
has(value)	返回一个布尔值，表示该值是否为Set的成员。
clear()	清除所有成员，没有返回值。
var set = new Set();
set.add(1).add(2).add(2);

console.log(set.size) // 2

console.log(set.has(1)) // true
console.log(set.has(2)) // true
console.log(set.has(3)) // false
console.log(set.delete(2)); // true
console.log(set.delete(3)); // false
console.log(set) // set {1}
set.clear()
console.log(set) // set {}
遍历方法 (Set 的遍历顺序就是插入顺序)
方法	描述
keys()	返回键名的遍历器
values()	返回键值的遍历器
entries()	返回键值对的遍历器
forEach()	使用回调函数遍历每个成员
由于 Set 结构没有键名，只有键值（或者说键名和键值是同一个值），所以keys方法和values方法完全一致。

var set = new Set([1, 2, 3]);

console.log(set.keys());   // SetIterator {1, 2, 3}
console.log(set.values());   // SetIterator {1, 2, 3}
console.log(set.entries());   // SetIterator {[1,1],[2,2],[3,3]}
set.forEach((value, key) => console.log(value) )   // 1 2 3
WeakSet
WeakSet的成员只能是对象，而不能是其他类型的值。

WeakSet中的对象都是弱引用，垃圾回收机制不考虑WeakSet对该对象的引用，也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于WeakSet之中。这意味着，无法引用WeakSet的成员，因此WeakSet是不可遍历的。

# Map
Map && WeakMap
Map
概述
javascript对象，本质上是键值对的集合。之前，只能用字符串当做键。
Map数据结构类似于对象，也是键值对的集合，但是"键"的范围不限于字符串，各种类型的值（包括对象）都可以当作键。
Object结构提供了"字符串—值"的对应，Map结构提供了"值—值"的对应，是一种更完善的Hash结构实现。
所以需要"键值对"的数据结构时，Map比Object更合适。

兼容

基本用法
Map 作为一个构造函数，可以接受一个数组当做参数。
***Map 结构中，字符串"true" 和 布尔值true 是两个不同的键值。***

var map = new Map([
[true, 'one'],
['true', 'two']
]);
console.log(map.get(true)) // 'one'
console.log(map.get('true')) // 'two'
只有对同一个对象的引用，Map结构才将其视为同一个键。所以下例中 set 和 get 中的 [1] 不是同一个键。

虽然NaN不严格相等于自身，但Map将其视为同一个键。

var map = new Map();

map.set([1], 111);
map.set(NaN, 222);
console.log(map.get([1]));  // undefined
console.log(map.get(NaN));  // 222
Map 属性
size 返回 Map结构的成员个数。

var map = new Map([
  [true, 'one'],
  ['true', 'two']
]);

map.set([1], 111);
console.log(map.size);  // 3
Map 操作方法
set() 方法返回的是Map本身，因此也可以采用链式写法。

var  map = new Map()
  .set(1, 'a')
  .set(2, 'b');
map.set(3, 'c')
console.log(map) // Map {1 => "a", 2 => "b", 3 => "c"}
get() 方法读取对应的键值，如果找不到传入的键值，返回undefined。

var  map = new Map()
  .set(1, 'a')
  .set(2, 'b')
  .set(3, 'c');

console.log( map.get(1) )   //'a'
console.log( map.get(2) )   //'b'
console.log( map.get(3) )   //'c'
has() 方法返回一个布尔值，表示该键值是否在 Map 结构中。

var  map = new Map()
  .set(1, 'a')
  .set(2, 'b')
  .set(3, 'c');

console.log( map.has(2) )   //  true
console.log( map.has(4) )   //  false
delete() 方法删除某个键，返回true。如果删除失败，返回false。

var  map = new Map()
  .set(1, 'a')
  .set(2, 'b')
  .set(3, 'c');

console.log( map.has(2) );     //  true
console.log( map.delete(2) );    // true
console.log( map.has(2) );    // false
console.log( map.delete(4) );   // false
clear() 方法清除所有成员，没有返回值。

var  map = new Map()
  .set(1, 'a')
  .set(2, 'b')
  .set(3, 'c');

console.log( map ); // Map {1 => "a", 2 => "b", 3 => "c"}
var  map = new Map()
  .set(1, 'a')
  .set(2, 'b')
  .set(3, 'c');

console.log( map.clear() );  // undefined
console.log( map );         // Map {}
Map 遍历方法
keys()：返回键名的遍历器。
values()：返回键值的遍历器。
entries()：返回所有成员的遍历器。

var map = new Map([
['name', 'bob'],
['age',  18],
]);

for (let key of map.keys()) {
console.log(key);
// name
// age
}

for (let value of map.values()) {
console.log(value);
// bob
// 18
}

for (let kv of map.entries()) {
console.log(kv[0], kv[1]);
// name bob
// age 18
}

for (let [key, value] of map.entries()) {
console.log(key, value);
// name bob
// age 18
}

for (let [key, value] of map) {
console.log(key, value);
// name bob
// age 18
}
Map && 数组
Map 转为 数组

var myMap = new Map().set(false, 0).set({aa: 1}, [2,3]);
var arr = [...myMap];
console.log( arr)
// [ [ false, 0 ], [ { aa: 1 }, [ 2, 3 ] ] ]
数组 转为 Map

var yMap = new Map([ [ false, 0 ], [ { aa: 1 }, [ 2, 3 ] ] ]);
console.log(yMap);
// Map {false => 0, Object {aa: 1} => [2, 3]}
Map && 对象
Map 转为 对象

如果所有Map的键都是字符串，它可以转为对象。

function strMapToObj(strMap) {
  let obj = Object.create(null);
  for (let [k,v] of strMap) {
    obj[k] = v;
  }
  return obj;
}

var myMap = new Map().set('yes', true).set('no', false);
strMapToObj(myMap)
// { yes: true, no: false }
对象 转为 Map

function objToStrMap(obj) {
  let strMap = new Map();
  for (let k of Object.keys(obj)) {
    strMap.set(k, obj[k]);
  }
  return strMap;
}

objToStrMap({yes: true, no: false})
WeakMap
WeakMap结构与Map结构基本类似，唯一的区别是它只接受对象作为键名（null除外），不接受其他类型的值作为键名。
键名所指向的对象，不计入垃圾回收机制。
var map = new WeakMap()
map.set(1, 2);        // Uncaught TypeError: Invalid value used as weak map key
map.set(Symbol(), 2); // Uncaught TypeError: Invalid value used as weak map key
