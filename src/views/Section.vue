<template>
  <div class="Section">
    <p>this.id: {{id}}</p>
    <p>this.$store.state.count: {{$store.state.count}}</p>

    <router-link to="/section/news-people">news-people</router-link>
    <router-link to="/section/entertainment">entertainment</router-link>
    <router-link to="/section/foodtravel">foodtravel</router-link>
    <router-link to="/section/hotvideo">hotvideo</router-link>
    <router-link to="/section/watch">watch</router-link>
    <hr/>
    <div class="list">
      <div v-for="item of rep._items" v-if="rep" >
        <Post :content="item" />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
</style>

<script>
  import apiData from '../libs/apiData'
  import Post from '../components/Post.vue'

  export default {
    name: 'Section',

    mixins: [apiData],

    components: {
      Post
    },

    data() {
      return {
        title: '',
        description: '',
        id: '',
        rep: '',
        items: {
          A: [
            { content: 'AAA' },
            { content: 'AAA' },
            { content: 'AAA' },
            { content: 'AAA' }
          ],
          B: [
            { content: 'BBB' },
            { content: 'BBB' },
            { content: 'BBB' }
          ],
          C: [
            { content: 'CCC' },
            { content: 'CCC' }
          ],
          D: [
            { content: 'DDD' }
          ]
        }
      }
    },

    metaInfo() {
      return {
        title: this.title,
        meta: [
          { vmid: 'description', name: 'description', content: this.description }
        ]
      }
    },

    created() {
      if (this.title) {
        this.fetchData('/sections?where={"name":"' + this.title + '"}').then(
          response => {
            this.fetchData('/posts?where={"sections":"' + response._items[0]._id + '"}&sort=-publishedDate').then(
              response => {
                this.rep = response
                // console.log('Success!', response) //eslint-disable-line
              },
              error => {
                console.error('Failed!', error) //eslint-disable-line
              }
            )
          },
          error => {
            console.error('Failed!', error) //eslint-disable-line
          }
        )
      }
    },

    prefetch(route, store) {
      return Promise.all([
        new Promise(resolve => {
          setTimeout(() => {
            resolve({
              title: route.params.title,
              description: 'description async loaded',
              id: route.params.title
            })
          })
        }),
        store.dispatch('asyncIncrement')
      ]).then(([componentData]) => componentData)
    },

    watch: {
      '$route'(to) {
        this.title= to.params.title //eslint-disable-line
        this.id = to.params.title
        this.$store.dispatch('asyncIncrement')

        if (this.title) {
          this.fetchData('/sections?where={"name":"' + this.title + '"}').then(
            response => {
              this.fetchData('/posts?where={"sections":"' + response._items[0]._id + '"}&sort=-publishedDate').then(
                response => {
                  this.rep = response
                },
                error => {
                  console.error('Failed!', error) //eslint-disable-line
                }
              )
            },
            error => {
              console.error('Failed!', error) //eslint-disable-line
            }
          )
        }
      }
    }
  }
</script>
