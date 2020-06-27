<template>
  <div class="row">
    <div v-for="(item, index) in items" :key="item.name">
      <div v-if="index === items.length - 1">
        {{ item.name }}
      </div>
      <template v-else>
        <div class="item">
          <router-link :to="item.link" class="item">
            {{ item.name }}
          </router-link>/
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumb',
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.row {
  display: flex;
  flex-direction: row;
  margin-bottom: 24px;
  line-height: 24px;
}

.item {
  margin-right: 8px;
}

@media screen and (max-width: 768px) {
  .row {
    font-size: 10px;
  }
  .item {
    margin-right: 4px;
  }
}
</style>
