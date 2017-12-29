<template>
  <div>
    弹框
    <button class="layui-btn" @click="dia">一个标准的按钮</button>
  </div>
</template>
<script>
export default {
  data: {

  },

  methods: {
    dia () {
      layer.open({
        title: '在线调试'
        ,content: '可以填写任意的layer代码'
      });
    }
  }
}
</script>

