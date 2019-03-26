//vue的常见模式
var app = new VTTCue({
    el:'#id', //相当于绑定元素的id
    data:{
        meaage:'hello vue'  //可以给变量赋值
    },
    methods:{
        down:function(){
            //这里面是写方法的
        }
    }
});

//声明式渲染
//常见指令 v-bind绑定  将title的属性和vue实例的message绑定
v-bind:title="message" //其缩写为 ：

//条件与循环
//那么这个属性将于 seen的值相关联 seen:true
v-if="seen"
//v-if根据seen的值的真假来插入或者移除元素


//循环 v-for 可以绑定数组的数据来渲染一个项目列表  v-for具有比v-if更高的优先级
<ol>
    <li v-for='todo in todos'>
        {{todo.text}}
    </li>
</ol>

data:{
    todos:[
        {text:1111},
        {text:1111},
        {text:1111}
    ]
}

//处理用户输入 v-on：添加一个事件监听器 一些指令能够接收一个参数，在指令名称之后以冒号表示
<button v-on:click="trigger">反转</button> //这里的参数是监听的事件名  其缩写为  @click

methods:{
    trigger:function(){
        this.meaage = this.message.spilt('').reversr('')
    }
}

//v-model 表单输入和应用状态之间的双向绑定
<p>{{meaage}}</p>
<input v-model='message'></input>

data:{
    message:'hello world'
}

//vue的计算属性
//计算属性和方法的区别   在于缓存，如果计算属性所依赖的属性并未改变，访问计算属性的时候可以不进行计算，可返回上一次计算的值，而不必再次执行方法
computer:{
    get:{ //默认属性

    },
    set:{ //可有可无

    }
}

computed: {
    fullName: {
      // getter
      get: function () {
        return this.firstName + ' ' + this.lastName
      },
      // setter
      set: function (newValue) {
        var names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
  }

 //v-show  只是简单切换元素的css属性display


 //列表渲染
 //v-for指令根据一组数组的选项列表进行渲染，v-for指令需要使用item in items的形式
 //在 v-for 块中，我们拥有对父作用域属性的完全访问权限。v-for 还支持一个可选的第二个参数为当前项的索引。
 <ul id="example-2">
  <li v-for="(item, index) in items">
    {{ parentMessage }} - {{ index }} - {{ item.message }}
  </li>
</ul>
var example2 = new Vue({
  el: '#example-2',
  data: {
    parentMessage: 'Parent',
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})


/*
    parent - 0-Foo
    parent - 1-Bar
*/

//v-for通过一个对象的属性来迭代
<ul id="v-for-object" class='demo'>
    <li v-for='value in object'>
        {{value}}
    </li>
</ul>

new Vue({
    el: "#v-for-object",
    data:{
        object:{
            firstName: 'jone',
            lastName: 'Doe',
            age: 30
        }
    }
})

/*
    jone
    Doe
    30

*/

//可以提供第二个参数为键名
<div v-for='(value,key) in object'>
    {{key}} : {{value}}
</div>

/*
    firstName : jone
    lastName : Doe
    age : 30
*/

//可以提供第三个参数index
<div v-for='(value , key , index) value in object'>
    {{index}}.{{key}}:{{value}}
</div>
/*
    0.firstName : jone
    1.lastName : Doe
    2.age : 30
*/

//key值的作用，为了给vue一个提示，以便于它能跟踪每个节点的身份，从而重用和重新排序现有元素
//你需要提供一个唯一key属性，理想的key值是每项都有的唯一id，类似于一个属性，所以需要用v-bind来绑定动态值
<div v-for='item in items' key='item.id' ></div>

/**
 * 数组更新检测的变异方法  即改变原数组
 * push（） 在数组的最后添加元素  返回值为数组长度
 * pop（） 在数组的最后删除元素   删除的元素
 * shift（） 在数组的开头删除元素  该元素
 * unshift（） 在数组的开头添加元素 该数组长度
 * splice（） 在某个字段删除并添加元素
 * sort（）  排序
 * reverse（） 反序
 * map()  遍历数组，参数是一个函数
 * 
 * 
 * 非变异方法  即不会改变原数组
 * slice（ ) 截取某些元素 返回新的数组
 * filter（）参数是一个函数，所有数组成员一次执行该函数，返回结果为true的成员组成一个新的数组返回
 * contact（） 在数组后面添加数组  返回新数组
 * 
 * 
 * 
 * vue不能检测对象属性的添加或者删除
 * 对于已经创建的实例，Vue不能动态添加根级别的响应式属性，但可以使用Vue.set()
 *  */

var vm=new Vue({
    data:{
        userProfile:{
            name: 'Anika'
        }
    }
})

Vue.set(vm.userProfile,'age',28)

/**
 * 有时需要为已有对象赋予新属性 可以使用assign（）
 */
vm.userProfile = Object.assign({},vm.userProfile,{
    age:27,
    favoriteColor: 'vue Green'
})

/**
 * v-for with v-if
 */
<li v-for='todo in todos' v-if='todo.isComplete'>
</li>

/**
 * 如果有条件地跳过循环，可以将v-if置于外层元素
 */
<ul v-if='todos.length'>
    <li v-for='todo in todos'>
    {{ todo}}
    </li>
</ul>

/**
 * v-on事件修饰符
 * .stop
 * .prevent
 * .capture
 * .self
 * .once
 * .passive
 */
//阻止单击事件继续传播
<a v-on:click.stop="doThis"></a>

//<!-- 提交事件不再重载页面 -->
<form v-on:submit.prevent="onSubmit"></form>

/**
 * 使用修饰符的顺序很重要
 */

 v-on:click.prevent.self //会阻止所有的点击
 v-on:click.self.prevent //只会阻止对元素自身的点击

 /**按键修饰符
  * 
  */
 <input v-on:MediaKeyStatusMap.13='submit'/>

 //vue为最常见的按键提供了别名
 <input v-on:MediaKeyStatusMap.enter='submit'/>

 /**
  * 全部按键的别名
  * .enter
  * .tab
  * .delete
  * .esc
  * .space
  * .down
  * .left
  * .up
  * .right
  * 
  * 
  * vue还可以自定义按键修饰符
  * vue.config.keyCodes.f1 = 112
  */

  /**
   * 系统修饰符
   * .ctrl
   * .alt
   * .shift
   * .meta  //window系统指的是window键
   */