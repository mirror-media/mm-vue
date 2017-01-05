<template>
    <div class="card">
      <img :src="content.heroImage.image.resizedTargets.mobile.url" alt="Avatar" style="width:100%">
      <div class="container">
        <h4>{{ content.title }}</h4> 
        <p>{{ content.publishedDate }}</p>
      </div>
    </div>
</template>

<style scoped>
    .card {
        background-color: #FFF;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        margin: 10px;
        width: 350px;
        transition: 0.3s;
    }

    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    .container {
        padding: 2px 16px;
    }
</style>

<script>
    export default {
      name: 'Post',
      props: ['content'],
      filters: {
        truncate(string, value) {
          return string.substring(0, value) + '...'
        }
      }
    }
</script>