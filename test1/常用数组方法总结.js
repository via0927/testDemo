//js数组,字符串常用方法

//数组
//1.push（） 向数组尾部添加一个或多个元素，并返回添加新元素后的数组长度  注意改方法会改变原数组
var arr = [1,2,3];
console.log(arr); // [1,2,3]
var b = arr.push(4);
console.log(b); //4
console.log(arr);//[1,2,3,4]

// pop(); 删除数组的最后一个元素，并返回该元素 注意该方法会改变远数组
var arr = [1,2,3];
console.log(arr); //[1,2,3]
arr.pop();
console.log(arr.pop()); //[3] //返回删除的元素
console.log(arr);  //[1,2]

//2 unshift()  在数组的第一个位置添加元素，并返回添加新元素后的数组长度 注意：该方法会改变数组
var arr= ['a','b','c'];
arr.unshift('x'); //4
console.log(arr); //['x' ,'a','b','c']

//shift() 删除数组的第一个元素，并返回该元素，注意该方法会改变原数组
var arr = ['a','b','c'];
arr.shift(); // 'a'
console.log(arr); //['b','c']
//shift() 还可以遍历并清空一个数组
var list = [1,2,3,4,5,6];
var item;
while(item = list.shift()){
    console.log(item);
}
console.log(list); //[]

//3 valueof() :返回函数的本身
var arr = [1,2,3];
arr.valueOf() //[1,2,3]

//indexOf() 返回指定元素在数组中出现的位置 如果没有出现则返回-1
var arr = ['a','b','c'];
arr.indexOf('b'); //1
arr.indexOf('x'); //-1

//indexOf() 方法还可以接收第二个参数 ，表示搜索的开始位置
['a','b','c'].indexOf('a',1); //-1 
['a','b','c'].indexOf('c',1); //2

//toString() :返回数组的字符串形式
var arr = [1,2,3];
arr.toString(); //"1","2","3"

var arr = [1,2,3,[4,5,6]];
arr.toString(); // "1","2","3","4","5","6"

//4 join();以参数作为分隔符，将所有数组成员组成一个字符串返回，如果不提供参数，默认逗号分隔
var arr = [1,2,3,4];
arr.join(); //'1,2,3,4'
arr.join('|'); // "1|2|3|4"
arr.join(' ');'1 2 3 4'

//5 concat():用于多个数组的合并 ，它将新数组的成员，添加到原数组的尾部，然后返回一个新数组，原数组不变
var arr = [1,2,3];
var b = arr.concat([4,5,6]);
console.log(b); //[1,2,3,4,5,6]
console.log(arr)//[1,2,3]

//6 reverse();用于颠倒数组中元素的顺序返回改变后的数组，注意该方法将改变原数组
var arr = ['a','b','c'];

arr.reverse(); //['c','b','a']
console.log(arr);//['c','b','a']

//7 slice() 用于截取原数组的一部分，返回一个新数组，原数组不变
//slice(start,end)它的第一个参数为起始位置，第二个参数为终止位置（该位置的元素本身不包括在内）
//如果省略第二个参数，则一直返回到原数组的最后一个成员
var arr = ['a','b','c'];

arr.slice(0); //['a','b','c']
arr.slice(1); // ['b','c']
arr.slice(1,2); //['b']
arr.slice(2,6); //['c']
arr.slice(); //['a','b','c']

arr.slice(-2); //['b','c'] 负数表示倒数计算的位置
arr.slice(-2,-1); //['b']

//8.splice() 删除原数组的一部分成员，并可以在被删除的位置添加新的数组成员，返回值是被删除的元素
//该方法会改变原数组
//splice(start,delNum,addElment,addElment2,.....)第一个参数是删除的起始位置，第二个参数是被 删除的
//元素个数，如果后面还有更多的参数，则表示这些就是要被插入数组的新元素
var arr = ['a','b','c','d','e','f'];
arr.splice(4,2); // ["e", "f"]　　从原数组4号位置，删除了两个数组成员
console.log(arr); // ["a", "b", "c", "d"]
var arr = ['a', 'b', 'c', 'd', 'e', 'f'];
arr.splice(4, 2, 1, 2);     // ["e", "f"]　　原数组4号位置，删除了两个数组成员,又插入了两个新成员
console.log(arr);     // ["a", "b", "c", "d", 1, 2]

var arr = ['a', 'b', 'c', 'd', 'e', 'f'];
arr.splice(-4, 2)     // ["c", "d"]    起始位置如果是负数，就表示从倒数位置开始删除

var arr = [1, 1, 1];

arr.splice(1, 0, 2)     // []    如果只插入元素,第二个参数可以设为0
conlose.log(arr)     // [1, 2, 1, 1]

var arr = [1, 2, 3, 4];
arr.splice(2)     // [3, 4] 如果只有第一个参数，等同于将原数组在指定位置拆分成两个数组
console.log(arr)     // [1, 2]

//9 sort() :对数组成员进行排序，默认是按照字典顺序排列 ，排序后，原数组将被改变
['d','c','b','a'].sort(); // // ['a', 'b', 'c', 'd']

[11, 101].sort()
// [101, 11]
 
[10111, 1101, 111].sort()
// [10111, 1101, 111]

//如果想让sort方法按照自定义排序，可以传入一个函数作为参数
var arr = [10111, 1101, 111];
arr.sort(function (a, b) {
   return a - b;
 })
 // [111, 1101, 10111]
 
 var arr1 = [
              { name: "张三", age: 30 },
              { name: "李四", age: 24 },
               { name: "王五", age: 28 }
            ]

 arr1.sort(function (o1, o2) {
   return o1.age - o2.age;
 }) 
 // [
 //   { name: "李四", age: 24 },
 //   { name: "王五", age: 28 },
 //   { name: "张三", age: 30 }
 // ]

 // 10 map() 对数组的所有成员一次调用一个函数，根据函数结果返回一个新数组 ,原数组并不改变
 var numbers = [1,2,3];

 numbers.map(function(n){
     return n+1;
 }); // [2,3,4]

 numbers //[1,2,3]

 //11.filter() 参数是一个函数，所有数组成员一次执行该函数，返回结果为true的成员组成一个新的数组返回
 //该方法不会改变原数组
 var arr = [1,2,3,4,5,6];
 arr.filter(function(elem){
     return (elem>3);
 })
//[4,5]