<template>
  <div class="todolist">
    <h1>Things To Do</h1>
    <form v-on:submit.prevent="addTodoItem">
      <input class="form-control" type="text" placeholder="Add New" v-model="item" />
    </form>
    <ul class="list-unstyled">
      <li class="ui-state-default" :key="item" v-for="item in listItem">
        <div class="checkbox">
          <label><input type="checkbox" value="on">{{item}}</label>
        </div>
      </li>
    </ul>
    <div class="left">{{listItem.length}} items left</div>
  </div>
</template>

<script>
export default {
  name: 'vue_todo',
  data () {
    return {
      item: '',
      listItem: []
    }
  },
  methods: {
    addTodoItem () {
      this.listItem.push(this.item)
      this.item = ''
    }
  }
}
</script>

<style>

</style>
