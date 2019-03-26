什么是组件：一个大对象
定义一个组件：
1.全局组件
        a) 先定义一个组件
        var Aaa=Vue.extend({
            template:'<h3>我是标题3</h3>'
        })
        b) 引用组件
        Vue.component('aaa',Aaa);
        c)实际操作
        <aaa></aaa>
2.全局组件另一种形式
组件里面放数据：
            data必须是函数的形式，函数必须返回一个对象（json）
        Vue.component('aaa',{
            data(){
                return {
                    msg: '我是标题3'
                }
            },
            template: '<h3>{{msg}}</h3>'
        })

// --------------------------
        var vm= Vue({
            el: '',
            data:'',
            component:{
                aaa:Aaa
            }
        })

        Vue.component('aaa',{
            template:'<strong>好</strong>'
        })

// -------------------------------
        组件里面放事件
        Vue.component('aaa',{
            data(){
                return {
                    msg: '我是标题3'
                }
            },
            methods:{
                change(){
                    this.msg='change'
                }
            },
            template: '<h3 @click='change'>{{msg}}</h3>'
        })
3.局部组件
        var Aaa = Vue.extend({
            template:'<h3>{{msg}}</h3>',
            data(){
                return {
                    msg : 'ddddd'
                }
            }
        })

        


        另一种方式 局部
        var vm = Vue({
            el:'',
            components:{
                'aaa':{
                    data(){
                        return {
                             msg:'welcome'
                        }
                    }
                },
                template:'<strong>{{msg}}</strong>'
            }
        })


        //模板的另一种写法
        <script type='x-template' id='bbb'>
                <strong>{{msg}}</strong>        
        </script>

        var vm = Vue({
            el:'',
            components:{
                'aaa':{
                    data(){
                        return {
                            msg:'welcome'
                        }
                    }
                },
                template:'#bbb'
            }
        })

        //另一种写法
        <template id='bbb'>
            <strong>{{msg}}</strong>  
        </template>

//动态组件
<component :is='组件名称'></component>
举例：
        <div id='box'>
            <input type='button' @click='a="aaa"' value='aaa组件'></input>
            <input type='button'@click='a="bbb"' value='bbb组件'></input>
            <component :is='a'>

            </component>
        </div>

        <script>
            var vm = new Vue({
                el: '#box'
                data:{
                    a:'aaa'
                },
                components:{
                    'aaa':{
                        template:'<h2>aaa</h2>'
                    },
                    'bbb':{
                        template:'<h2>bbb</h2>'
                    }
                }
            })
        </script>
//------------------------------
vue-devtools 调试工具

父子组件：
var vm = new Vue({
    el: '#box',
    data:{

    },
    components:{
        'aaa':{
            return {
                msg:''
            }
        },
        template:'<h2></h2>',
        components:{
            'bbb':{
                template:'<h3></h3>'
            }
        }
    }
})
组件之间传值 
子组件获取父组件的值 props:[]
<template id="aaa">
    <h2></h2>
    <bbb :m='msg2'></bbb>
</template>
<script>
var vm = new Vue({
    el: '#box',
    data:{
        a:'aaa'
    },
    components:{
        'aaa':{
            data(){
                return {
                msg:'我是父组件'
                }
            }
        },
        template:'#aaa',
        components:{
            'bbb':{
                props:['m']
                template:'<h3></h3>'
            }
        }
    }
})
</script>

       