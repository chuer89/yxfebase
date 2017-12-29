<template>
  <div>
    <header>
      <div><router-view/></div>
      <h1>{{title}}-{{id}}</h1>
      <input placeholder="情输入" v-model="todo" @keyup.enter="addTodo">
    </header>
    <section v-show="todos.length">
      <ul>
        <li v-for="todo in todos">
          {{todo.name}}
        </li>
      </ul>
    </section>
  </div>
</template>

<style lang="scss">
h1{
  font-size: 20px;
}
ul{
  li{
    font-size: 30px;
    color: red;
  }
}
</style>


<script>

export default {
  name: 'todo1',
  props: ['id'],
  data () {
    return {
      title: '这里是vue标题',
      todo: '',
      todos: [{
        name: 'name1'
      }]
    }
  },

  computed: {
    a () {
      return 1
    }
  },

  methods: {
    addTodo () {
      // this.$router.push({
      //   path: 'yy',
      //   query: {
      //     a: 1
      //   }
      // })
      if (this.todo) {
        // this.$store.commit('addTodo', )
        this.todos.push({
          name: this.todo
        })
      }
    }
  }
}
</script>

