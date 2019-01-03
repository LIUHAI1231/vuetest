var app1 = new Vue({
  el: '#app-1',
  data: {
    message: "Hello World!",
  },
});

var app2 = new Vue({
  el: '#app-2',
  data: {
    title: '页面加载于 ' + new Date().toLocaleString(),
  },
});

var app3 = new Vue({
  el: '#app-3',
  data: {
    bool: true,
  },
});

var app4 = new Vue({
  el: '#app-4',
  data: {
    passClass: "pass",
    notpassClass: "notpass",
    collection: [
      {personalName:"小明", bookName: "《滚出去》", state:1},
      {personalName:"李雷", bookName: "《How are you?》", state:0},
      {personalName:"韩梅梅", bookName: "《Fine,and you?》", state:1},
    ]
  },
});

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: "1 2 3 4 5 6",
  },
  methods:{
    reverseMessage: function(){
      this.message = this.message.split(' ').reverse().join(' ');
    },
  }
});

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: "",
    isEmpty: true,
    checked: true,
    checkedNames: [],
    selected: "",
  },
  methods:{
    switchP: function(){
      console.log(this.checkedNames)
      if(this.message){
        this.isEmpty = false;
      }else{
        this.isEmpty = true;
      }
    },
  }
});

// 定义名为 todo-item 的新组件
Vue.component('todo-item', {
  // todo-item 组件现在接受一个
  // "prop"，类似于一个自定义特性。
  // 这个 prop 名为 todo。
  props: ['todo', 'classobj'],
  template: '<li  v-bind:class="[todo.state?classobj.passClass:classobj.notpassClass]">{{ todo.text }} {{ todo.id }}</li>'
});
var app7 = new Vue({
  el: '#app-7',
  data: {
    classObject: {
      passClass: "pass",
      notpassClass: "notpass",
    },
    
    groceryList: [
      { id: 0, text: '蔬菜',  bool:true, state:1 },
      { id: 1, text: '奶酪',  bool:false, state:0 },
      { id: 2, text: '随便其它什么人吃的东西',  bool:true, state:1 }
    ]
  }
});


Vue.component('table-item', {
  props: ['title', 'collection'],
  template: '<table>'+
              '<thead>'+
                '<th v-for="val in title">{{val}}</th>'+
              '</thead>'+
              '<tbody>'+
                '<tr v-for="val in tdValue(collection)">'+
                  '<td>{{val}}</td>'+
                  // '<td>{{val.id}}</td>'+
                  // '<td>{{val.name}}</td>'+
                  // '<td>{{val.sex?"男":"女"}}</td>'+
                  // '<td>{{val.state?"通过":"不通过"}}</td>'+
                  // '<td v-for="val in tdValue(tdcontent)">{{val}}</td>'+
                '</tr>'+
              '</tbody>'+
            '</table>'
});
var app8 = new Vue({
  el: '#app-8',
  data: {
    titleItem: ["编号","名称","性别","审核状态"],
    collection: [
      { id: 0, name: "小明", sex:1, state:1 },
      { id: 1, name: "李雷", sex:1, state:0 },
      { id: 2, name: "韩梅梅", sex:0, state:1 }
    ]
  },
  methods: {
    tdValue: function(content){
      // content.sex = content.sex?"男":"女";
      // content.state = content.state?1:0;
      console.log(content.sex)
      var a = {
        id: content.id,
        name: content.name,
        sex: content.sex?"男":"女",
        state: content.state?"通过":"不通过",
      };
      return a
    }
  }
});

var app9 = new Vue({
  el: '#app-9',
  data: {
    numbers: [ 1, 2, 3, 4, 5 ],
    collection: [
      { id: 0, name: "小明", sex:1, state:1 },
      { id: 1, name: "李雷", sex:1, state:0 },
      { id: 2, name: "韩梅梅", sex:0, state:1 }
    ]
  },
  methods: {
    even: function (numbers) {
      return numbers.filter(function (number) {
        return number % 2 === 0
      })
    },
    odd(numbers) {
      var numbers = numbers.filter(function (number) {
        return number % 2 != 0
      });
      return numbers;
    },
    warn: function (message, event) {
      // 现在我们可以访问原生事件对象
      console.log(event)
      if (event) event.preventDefault()
      alert(message)
    }

  }
});


Vue.component('todo-item', {
  template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\', {a:0.1, b:0.2})">Remove</button>\
    </li>\
  ',
  props: ['title']
})

new Vue({
  el: '#todo-list-example',
  data: {
    newTodoText: '',
    todos: [
      {
        id: 1,
        title: 'Do the dishes',
      },
      {
        id: 2,
        title: 'Take out the trash',
      },
      {
        id: 3,
        title: 'Mow the lawn'
      }
    ],
    nextTodoId: 4
  },
  methods: {
    addNewTodo: function () {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      })
      this.newTodoText = ''
    },
    removeTodo: function(index, $event){
      this.todos.splice(index, 1);
      console.log(index)
      console.log($event)
    }
  }
})