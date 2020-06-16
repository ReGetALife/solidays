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
    </div>
    <Comment />
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import Breadcrumb from '../../components/Breadcrumb'
import resolveMd from '../../assets/js/resolveMd'
import Comment from '../../components/Comment'

export default {
  components: { Comment, Breadcrumb, VueMarkdown },
  data () {
    return {
      obj: {}
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

@media screen and (max-width: 768px) {
  h1 {
    font-size: 20px;
  }
}
</style>
