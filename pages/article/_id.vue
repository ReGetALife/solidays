<template>
  <div class="container">
    <div class="main">
      <Breadcrumb :items="items" />
      <VueMarkdown :source="obj.content" />
    </div>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import Breadcrumb from '../../components/Breadcrumb'
import resolveMd from '../../assets/js/resolveMd'

export default {
  components: { Breadcrumb, VueMarkdown },
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
  height: 100vh;
  width: 100vw;
  padding: 40px;
  display: flex;
  justify-content: center;
}

.main {
  width: 800px;
}
</style>
