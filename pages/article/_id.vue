<template>
  <div class="container">
    <div class="main">
      <Breadcrumb :items="items" />
      <h1>{{ obj.what || '无题' }}</h1>
      <div class="info">
        <div>{{ obj.who || '佚名' }}</div>
        <div>{{ obj.when || '神秘时间' }}</div>
        <div>{{ obj.where || '神秘地点' }}</div>
      </div>
      <VueMarkdown :source="obj.content" />
      <a :href="`https://github.com/${mdBaseRepo}/blob/master/static/article/${mdId}.md`" class="view-source">
        在 GitHub 上查看本页
      </a>
    </div>
    <Comment />
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import Breadcrumb from '../../components/Breadcrumb'
import resolveMd from '../../assets/js/resolveMd'
import Comment from '../../components/Comment'
import conf from '../../solidays.config'

export default {
  components: { Comment, Breadcrumb, VueMarkdown },
  data () {
    return {
      obj: {},
      mdBaseRepo: conf.mdBaseRepo,
      mdId: this.$nuxt.$route.params.id
    }
  },
  computed: {
    items () {
      return [
        { name: 'Home', link: '/' },
        { name: '文章', link: '/article' },
        { name: this.obj.what, link: this.$nuxt.$route.path }
      ]
    }
  },
  beforeCreate () {
    this.$axios.$get('/article/' + this.$nuxt.$route.params.id + '.md').then((data) => {
      this.obj = resolveMd(data)
    })
  }
}
</script>

<style scoped>
.container {
  min-height: 100vh;
  width: 100vw;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main {
  width: 100%;
  max-width: 800px;
  min-height: 60vh;
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
