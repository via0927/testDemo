/**
 * v-model指令在表单<input> <textarea> <select>元素上创建了双向绑定
 * 
 * v-model 会忽略所有表单元素的value checked select特性的初始值而总是
 * 将vue实例的数据作为数据来源，应通过data来声明初始值
 */

 //对于单个复选框,绑定布尔值
 <input type='checkbox' id='checkbox' v-model='check'>
    <label for='checkbox'>{{checked}}</label>
 </input>

 //单选按钮
 <div id="example-4">
  <input type="radio" id="one" value="One" v-model="picked"/>
  <label for="one">One</label>
  </br>
  <input type="radio" id="two" value="Two" v-model="picked"/>
  <label for="two">Two</label>
  <br>
  <span>Picked: {{ picked }}</span>
</div>
new Vue({
  el: '#example-4',
  data: {
    picked: ''
  }
})

/** 
 * 选择框
*/