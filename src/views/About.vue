<template>
  <div class="container">
    <div class="main">
      <Breadcrumb :items="items" />
      <h1>嗨，我是李庆国</h1>
      <p>毕业于同济大学软件学院软件工程专业</p>
      <p>GitHub: <a href="https://github.com/ReGetALife">ReGetALife</a></p>
    </div>
  </div>
</template>

<script>

import Breadcrumb from '../components/Breadcrumb'

export default {
  components: { Breadcrumb },
  data () {
    return {
      items: [
        { name: '主页', link: '/' },
        { name: '关于', link: '/about' }
      ]
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

h1 {
  font-weight: normal;
  font-size: 20px;
  line-height: 40px;
}

@media screen and (max-width: 768px) {
  h1 {
    font-size: 16px;
    line-height: 32px;
  }
  a {
    font-size: 16px;
  }
}
</style>
