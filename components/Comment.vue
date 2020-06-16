<template>
  <div id="gitalk-container" />
</template>

<script>
import 'gitalk/dist/gitalk.css'
import Gitalk from 'gitalk'

export default {
  name: 'Comment',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  mounted () {
    const gitalk = new Gitalk({
      clientID: '46af082b43feaa22492c',
      clientSecret: 'a8ea0ddfa07d0dba5c9e29c914bb83cb1fbe3e3d',
      repo: 'solidays',
      owner: 'ReGetALife',
      admin: ['ReGetALife'],
      id: this.id, // Ensure uniqueness and length less than 50
      distractionFreeMode: false // Facebook-like distraction free mode
    })

    gitalk.render('gitalk-container')
  }
}
</script>

<style scoped>

</style>
