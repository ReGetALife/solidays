<template>
  <div class="container">
    <div class="main">
      <Breadcrumb :items="items" />
      <div v-for="e in list" :key="e[0]" class="article">
        <div class="row">
          <router-link :to="'/article/'+e[0]">
            {{ e[1] }}
          </router-link>
          <div class="date">{{ new Date(e[2]).toLocaleDateString() }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '../components/Breadcrumb'
import list from '../assets/gen/list.json'
export default {
  components: { Breadcrumb },
  mounted() {
    document.dispatchEvent(new Event('page-is-ready'))
  },
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
  padding: 40px;
  display: flex;
  justify-content: center;
}

.main {
  width: 900px;
}

.article {
  font-size: 20px;
  line-height: 40px;
}

.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.date {
  font-size: 16px;
  color: gray;
  margin-left: 8px;
}

@media screen and (max-width: 768px) {
  .article {
    font-size: 16px;
  }

  .date {
    font-size: 14px;
  }
}
</style>
