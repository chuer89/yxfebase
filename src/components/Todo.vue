<template>
  <div>
    <header>
      <h1 :class="[classDemo]">Hello todo -{{todoTitle}}-</h1>
      <input v-model="todoTitle" @keyup.enter="addTodo" />
    </header>
    <section>
      <li v-for="todo in todos">
        {{todo.title}}
        <button @click="delTodo(todo)">删除</button>
      </li>
    </section>
  </div>
</template>
<script>
export default {
  name: 'todo',
  data () {
    return {
      todoTitle: '',
      classDemo: 'a b c'
    }
  },
  computed: {
    todos () {
      return this.$store.state.todos
    }
  },
  methods: {
    addTodo () {
      this.$store.commit('addTodo', {
        title: this.todoTitle
      })
      this.todoTitle = ''
    },
    delTodo (todo) {
      this.$store.commit('delTodo', {todo: todo})
    }
  }
}
</script>

