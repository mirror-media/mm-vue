export default {
  methods: {
    fetchData(url) {
      const superagent = require('superagent')

      const apiHost = 'http://localhost:8200/api'

      return new Promise(resolve => {
        superagent
        .get(apiHost + url)
        .end((err, response) => {
          resolve(JSON.parse(response.text))
        })
      })
    }
  }
}
