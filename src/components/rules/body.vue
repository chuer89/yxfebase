<template>
  <el-container>
    <el-aside width="200px">
      <el-menu :default-openeds="['1', '2']">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-setting"></i>ES6
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">
              <router-link :to="{ path: '/todo' }">函数</router-link>
            </el-menu-item>
            <el-menu-item index="1-2">
              <router-link :to="{ name: 'Todo1', params: { id: 11 }}">对象</router-link>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-tickets"></i>CSS
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1">命名</el-menu-item>
            <el-menu-item index="2-2">选择器</el-menu-item>
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
// import nav from '@/components/rules/nav'

export default {
  name: 'rulesBody',
  comments: {
    // 'my-nav1': () => import('@/components/rules/nav')
  }
}
</script>

