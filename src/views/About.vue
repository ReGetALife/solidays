<template>
  <div class="container">
    <div class="main">
      <Breadcrumb :items="items" />
      <h1>关于名字</h1>
      <p>Solidays是Eason的一个专辑（<del>但我其实最喜欢的是DUO和Get A Life</del></p>
      <h1>关于作者</h1>
      <p>会一点 C，C++，C#，Java，Go，Python，JavaScript/TypeScript，HTML5，CSS，COBOL<del>（等等，这是啥？）</del>
        ，Vue，React，Angular，Uni-app，微信小程序/小游戏，Electron，Qt，Cocos，Unity，SpringBoot，Asp.net，flask，
        Django，FastApi，Nodejs，MySQL，Oracle，Redis，MongoDB，Docker，Pytest，Gtest，LangChain，Pytorch，MindSpore，LLVM，Clang-Tidy……
      精通 Google，ChatGPT</p>
      <br>
      <p>2016-2020 同济大学软件学院</p>
      <p>2019-2020 Unity 前端工程师</p>
      <p>2020-2023 华为无线网络产品线</p>
      <p>2023-2023 华为科学计算实验室</p>
      <p>2024- ?</p>
      <br>
      <p>GitHub: <a href="https://github.com/ReGetALife">ReGetALife</a></p>
    </div>
  </div>
</template>

<script>

import Breadcrumb from '../components/Breadcrumb'

export default {
  components: { Breadcrumb },
  mounted() {
    document.dispatchEvent(new Event('page-is-ready'))
  },
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
