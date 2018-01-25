<template>
  <el-container>
    <el-aside width="200px">
      <el-menu :default-openeds="['1', '2']">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-setting"></i>ES6
          </template>
          <el-menu-item-group>
            <el-menu-item @click="toPath('/es6/function')" index="1-1">函数</el-menu-item>
            <el-menu-item @click="toPath('/es6/object')" index="1-2">对象</el-menu-item>
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
      <div id="show-md">
        <router-view/>
      </div>
    </el-main>
  </el-container>
</template>
<script>
// import nav from '@/components/rules/nav'

let getMd = mdPath => {
  let self = this;
  axios.get("/md" + mdPath).then(res => {
    $("#show-md").html("");
    editormd.markdownToHTML("show-md", {
      markdown: res.data, // + "\r\n" + $("#append-test").text(),
      htmlDecode: "style,script,iframe", // you can filter tags decode
      emoji: true,
      taskList: true,
      tex: true, // 默认不解析
      flowChart: true, // 默认不解析
      sequenceDiagram: true // 默认不解析
    });
  });
};

export default {
  data() {
    return {
      menu: [{}]
    };
  },

  beforeCreate() {
    getMd("/info.md");
  },

  methods: {
    toPath(path) {
      // router.push({
      //   path: path
      // })
      getMd(path + ".md");
    }
  }
};
</script>

