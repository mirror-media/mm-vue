<template>
  <div class="show-error-page">

  </div>
</template>

<script>
export default {
  data() {
    return {
      foo: 0
    }
  },

  metaInfo() {
    return {
      title: 'Error',
      meta: [
        { vmid: 'description', name: 'description', content: 'Not Found' }
      ]
    }
  },

  prefetch() {
    return Promise.reject()
  },

  beforeMount() {
    this.prefetched.catch(() => {
      alert('500 Internal Server Error')
    })
  }
}
</script>
