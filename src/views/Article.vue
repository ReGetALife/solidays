<template>
  <div class="container">
    <div id="article" />
    <Comment />
  </div>
</template>

<script>

import Vue from 'vue'
import router from '@/router'
import Axios from 'axios'
import resolveMd from '../assets/js/resolveMd'
import Comment from "@/components/Comment";
import ArticleMainContent from "@/components/ArticleMainContent";


export default {
  components: { Comment },
  async created() {
    this.rendered = document.getElementById('rendered')
    const res = await Axios.get(`/article/${this.$route.params.id}.md`)
    const articleMainContent = Vue.extend(ArticleMainContent)
    if (this.rendered) {
      // first page from server
      new articleMainContent({ router, propsData: { obj: resolveMd(res.data) } }).$mount("#rendered")
    } else {
      // browser side
      new articleMainContent({ router, propsData: { obj: resolveMd(res.data) } }).$mount("#article")
      document.dispatchEvent(new Event('page-is-ready'))
    }
  },
  mounted() {
    if (this.rendered) {
      const mountPoint = document.getElementById('article')
      mountPoint.parentNode.replaceChild(this.rendered, mountPoint)
    }
  },
  data() {
    return {
      rendered: null
    }
  }
}
</script>

<style scoped>
.container {
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
