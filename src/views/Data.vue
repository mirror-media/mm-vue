<template>
  <div class="Data">{{rep}}</div>
</template>

<script>
import apiData from '../libs/apiData'

export default {

  mixins: [apiData],

  data() {
    return {
      title: '',
      description: '',
      rep: 'none',
      name: 'watch'
    }
  },

  created() {
    this.fetchData('/sections?where={"name":"' + this.name + '"}').then(
      response => {
        this.rep = response
        // console.log('Success!', response) //eslint-disable-line
      },
      error => {
        console.error('Failed!', error) //eslint-disable-line
      }
    )
  },

  metaInfo() {
    return {
      title: this.title,
      meta: [
        { vmid: 'description', name: 'description', content: this.description }
      ]
    }
  },

  prefetch() {
    return Promise.all([
      new Promise(resolve => {
        setTimeout(() => {
          resolve({
            title: 'title async loaded',
            description: 'description async loaded'
          })
        })
      })
    ]).then(([componentData]) => componentData)
  }
}
</script>
