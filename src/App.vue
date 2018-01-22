<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="8">
            <h1>高校教辅平台 - FE基础设施</h1>
          </el-col>
          <el-col :span="16">
            <ul class="layui-nav" lay-filter="">
              <li class="layui-nav-item layui-this">
                <router-link :to="{ path: '/' }">代码规范</router-link>
              </li>
              <li class="layui-nav-item">
                <router-link :to="{ path: '/module' }">组件</router-link>
              </li>
              <li class="layui-nav-item">
                <router-link :to="{ path: '/' }">分享</router-link>
              </li>
            </ul>
          </el-col>
        </el-row>
      </el-header>
      <router-view/>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted: function () {
    layui.element.init()
  }
}
</script>

<style lang="scss">
.el-header {
  background: #393D49;
  color: white;
  line-height: 60px;
}
  
.el-aside {
  color: #333;
}

.clearfix:after{
  content:".";
  display:block;
  height:0;
  clear:both;
  visibility:hidden
}

.fl{float: left}
.fr{float: right}

.editormd-preview-container, .editormd-html-preview{
  padding: 0;
}
</style>
