<template>
  <div class="utterances">
    <script
      type="application/javascript"
      src="https://utteranc.es/client.js"
      :repo="commentBaseRepo"
      issue-term="pathname"
      theme="github-light"
      crossorigin="anonymous"
      async
    />
  </div>
</template>

<script>
import conf from '../../solidays.config'

export default {
  name: 'Comment',
  data () {
    return {
      commentBaseRepo: conf.commentBaseRepo
    }
  }
}
</script>

<style>
.utterances {
  max-width: 800px;
  width: 100%;
}
</style>
