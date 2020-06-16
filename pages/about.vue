<template>
  <div class="container">
    <div class="main">
      <Breadcrumb :items="items" />
      <h1>李庆国</h1>
      <h1>同济大学 软件学院 软件工程专业</h1>
      <h1>GitHub: <a href="https://github.com/ReGetALife">ReGetALife</a></h1>
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
  min-height: 100vh;
  width: 100vw;
  padding: 40px;
  display: flex;
  justify-content: center;
}

.main {
  width: 800px;
}

h1 {
  font-weight: normal;
  font-size: 20px;
  line-height: 40px;
}

a {
  font-size: 20px;
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
