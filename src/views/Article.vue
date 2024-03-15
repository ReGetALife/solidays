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
    const res = await Axios.get(`/article/${this.$route.params.id}.md`)
    const articleMainContent = Vue.extend(ArticleMainContent)

      // browser side
      new articleMainContent({ router, propsData: { obj: resolveMd(res.data) } }).$mount("#article")
      document.dispatchEvent(new Event('page-is-ready'))
  },
  mounted() {
  },
  data() {
    return {
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
