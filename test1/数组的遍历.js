/**
 * 方法一   for循环
 */
 for(i = 0 ; i < Array.length; i++){

 }

 //方法二 优化版的for循环
 for(i=0, len = Array.length; i < len ; i++){

 }

 //方法三 foreach
 array.forEach(element => {
     
 });

 //方法四 foreach变种
 array.prototype.forEach.call(arr,function(el){

 })

 //方法五 for in
 for(i in arr){

 }

 //方法六 map
 arr.map( n => {

 })


 //filter方法  得到返回值为true的元素集合
 var newArray = [50 ,2,60,4,53,15].filter((v,i) => (v > 10))
 //newArray = [50,60,53,15]


//js中关于every()和some()的用法
//两种方法都是数组的迭代方法   
//every()是对数组中每一项运动给定函数，如果该函数对 每一项 返回为true 则返回true  数组中每个元素满足条件才能返回true
//some() 是对数组中每一项运动给定函数，如果该函数对 任一项 返回为true 则返回true  数组中只有一个元素满足条件就返回true
var arr = [1,2,3,4,5,6];
console.log(arr.some((item,index,array)=>{
    console.log('item='+ item +',index='+index+',array='+array);
    return item > 3; //true
}))

console.log(arr.every((item,index,array)=>{
    console.log('item='+ item +',index='+index+',array='+array);
    return item > 3; //false
}))


//  reduce(ck,init)方法  依次执行ck（prv.next）  arr.reduce(callback,[initvalue])
//  callback是执行的函数包含四个参数
//  previousValue 上一次调用回调函数的返回值  必选
//  currentValue  数组中当前被处理的元素  必选
//  index  当前元素在数组中的索引   可选
//  array  调用reduce的数组    可选
var item = [10, 120, 1000];
 
var reducer = function (sumSoFar, item) { return sumSoFar + item};
 
var total = items.reduce(reducer, 0);
 
console.log(total); // 1130



//数组的去重
//最简单是方法
function uniq(array){
    var temp = [];
    for(var i = 0 ; i< array.length; i++){
        if(temp.indexOf(array[i]) == -1){
             temp.push(array[i]);
        }
        return temp;
    }
}

//数组下标法
function uniq(array){
    var temp= [];
    for(var i = 0 ; i < array.length ; i++){
        if(array.indexOf(array[i]) == i){
            temp.push(array[i])
        }
    }
    return temp;
}

//优化遍历数组
function uniq(array){
    var temp = [];
    var index = [];
    var l = array.length;
    for(var i = 0 ; i < l ; i++){
        for(var j = i+ 1 ; j < l ; j++){
            if(array[i] === array[j]){
                i++;
                j = i;
            }
        }
        temp.push(array[i]);
        index.push(i);
    }
    return temp;

}



 