<template>
  <div class="root">
    <div class="container">
      <h1 class="title">
        solidays
      </h1>
      <div class="categories">
        <router-link to="/article">
          文章
        </router-link>
        <router-link to="/about">
          关于
        </router-link>
      </div>
    </div>
    <div class="footer">
      <a href="https://github.com/ReGetALife/solidays">源码仓库</a>
    </div>
  </div>
</template>

<script>

export default {
  mounted() {
    document.dispatchEvent(new Event('page-is-ready'))
  }
}
</script>

<style scoped>
.root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.container {
  margin: 0 auto;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
  'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.categories {
  display: flex;
  flex-direction: row;
  margin-top: 24px;
  width: 300px;
  justify-content: space-between;
  font-size: 24px;
  line-height: 32px;
}

a {
  text-decoration: none;
  color: black;
}

a:hover {
  text-decoration: underline;
}

a:active {
  color: blue;
}

.footer {
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  line-height: 40px;
}

@media screen and (max-width: 768px){
  .title {
    font-size: 50px;
  }
  .categories {
    width: 150px;
    font-size: 16px;
  }
}
</style>
