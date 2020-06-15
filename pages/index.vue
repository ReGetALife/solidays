<template>
  <div>
    <div class="container">
      <h1 class="title">
        solidays
      </h1>
      <div class="categories">
        <nuxt-link to="/article">
          文章
        </nuxt-link>
        <nuxt-link to="/about">
          About
        </nuxt-link>
        <a href="https://www.solidays.tk">
          旧站
        </a>
      </div>
    </div>
    <div class="footer">
      <a href="https://世界1流大学.com">世界1流大学.com</a>
      <a href="https://github.com/ReGetALife/solidays">Source</a>
    </div>
  </div>
</template>

<script>

export default {}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
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
  position: absolute;
  bottom: 0;
  width: 100vw;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  line-height: 40px;
}
</style>
