<template>
  <div>
    <h1>这里是简介</h1>
    <div id="show-md"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      md: "2323",
      input: ''
    };
  },

  computed: {
    compiledMarkdown() {
      return marked(this.input, { sanitize: true })
    }
  },

  methods: {
    update: _.debounce(function (e) {
      this.input = e.target.value
    }, 300)
  },

  beforeCreate() {
    let self = this;
    axios.get("/md/info.md").then((res) => {
      editormd.markdownToHTML('show-md', {
          markdown: res.data, // + "\r\n" + $("#append-test").text(),
          htmlDecode: 'style,script,iframe', // you can filter tags decode
          emoji: true,
          taskList: true,
          tex: true, // 默认不解析
          flowChart: true, // 默认不解析
          sequenceDiagram: true, // 默认不解析
      });
    });
  }
};
</script>

