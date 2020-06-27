<template>
  <div class="container">
    <div class="main">
      <Breadcrumb :items="items" />
      <div v-for="e in list" :key="e[0]" class="article">
        <router-link :to="'/article/'+e[0]">
          {{ e[1] }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '../components/Breadcrumb'
import list from '../assets/gen/list.json'
export default {
  components: { Breadcrumb },
  data () {
    return {
      items: [
        { name: '主页', link: '/' },
        { name: '文章', link: '/article' }
      ],
      list
    }
  }
}
</script>

<style scoped>
.container {
  min-height: 100vh;
  width: 100vw;
  padding: 40px;
  display: flex;
  justify-content: center;
}

.main {
  width: 800px;
}

.article {
  font-size: 20px;
  line-height: 40px;
}

@media screen and (max-width: 768px) {
  .article {
    font-size: 16px;
  }
}
</style>
