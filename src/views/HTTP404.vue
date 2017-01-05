<template>
  <div class="http404">
    <p>404 Not Found</p>
  </div>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: '404',
      meta: [
        { vmid: 'description', name: 'description', content: 'Not Found' }
      ]
    }
  }
}
</script>