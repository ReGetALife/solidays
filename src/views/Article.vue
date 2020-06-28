<template>
  <div class="container" v-if="obj">
    <div class="main">
      <Breadcrumb :items="items" />
      <h1>{{ obj.what || '无题' }}</h1>
      <div class="info">
        <div>{{ obj.who || '佚名' }}</div>
        <div>{{ obj.when || '神秘时间' }}</div>
        <div>{{ obj.where || '神秘地点' }}</div>
      </div>
      <VueMarkdown :source="obj.content" class="markdown-body"/>
      <a :href="`https://github.com/${mdBaseRepo}/blob/master/public/article/${mdId}.md`" class="view-source">
        在 GitHub 上查看本页
      </a>
    </div>
    <Comment />
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import 'github-markdown-css'
import Axios from 'axios'
import Breadcrumb from '../components/Breadcrumb'
import resolveMd from '../assets/js/resolveMd'
import Comment from '../components/Comment'
import conf from '../../solidays.config'

export default {
  components: { Comment, Breadcrumb, VueMarkdown },
  async created() {
    const res = await Axios.get(`/article/${this.$route.params.id}.md`)
    this.obj = resolveMd(res.data)
    document.dispatchEvent(new Event('page-is-ready'))
  },
  data() {
    return {
      obj: undefined,
      mdBaseRepo: conf.mdBaseRepo,
      mdId: this.$route.params.id
    }
  },
  computed: {
    items() {
      return [
        { name: '主页', link: '/' },
        { name: '文章', link: '/article' },
        { name: this.obj.what, link: this.$route.path }
      ]
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

.main {
  width: 100%;
  max-width: 900px;
}

h1 {
  font-weight: normal;
  font-size: 24px;
}

.info {
  display: flex;
  flex-direction: row;
  font-size: 14px;
  line-height: 20px;
  color: gray;
  margin-top: 10px;
  margin-bottom: 20px;
}

.info div {
  margin-right: 16px;
}

.view-source {
  color: gray;
  margin-top: 24px;
  float: right;
  font-size: 14px;
}

@media screen and (max-width: 768px) {
  h1 {
    font-size: 20px;
  }
}
</style>
