<template>
  <el-container>
    <el-aside width="200px">
      <el-menu :default-openeds="['1', '2']">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-printer"></i>弹出层
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">
              <router-link :to="{ path: '/module/dialog' }">弹框</router-link>
            </el-menu-item>
            <el-menu-item index="1-2">
              <router-link :to="{ path: '/module/button'}">按钮</router-link>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
a {
  display: block;
}
</style>


