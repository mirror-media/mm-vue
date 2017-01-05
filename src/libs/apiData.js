export default {
  methods: {
    fetchData(url) {
      const superagent = require('superagent')

      const apiHost = 'http://127.0.0.1:8200/api'

      return new Promise(resolve => {
        superagent
        .get(apiHost + url)
        .end((err, response) => {
          if (!err && response) {
            resolve(JSON.parse(response.text))
          } else {
            resolve('{\'error\':' + err + '}')
          }
        })
      })
    }
  }
}
