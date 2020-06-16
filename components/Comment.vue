<template>
  <div class="utterances">
    <script
      src="https://utteranc.es/client.js"
      repo="ReGetALife/solidays-comment"
      issue-term="pathname"
      theme="github-light"
      crossorigin="anonymous"
      async
    />
  </div>
</template>

<script>

export default {
  name: 'Comment'
}
</script>

<style>
.utterances {
  max-width: 800px;
  width: 100%;
}
</style>
