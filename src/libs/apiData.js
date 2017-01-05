export default {
  methods: {
    fetchData(url) {
      const superagent = require('superagent')

      let apiHost = 'http://127.0.0.1:8200'

      if (TARGET === 'web') {
        apiHost = '/api'
      } else {
        apiHost = 'http://127.0.0.1:8200'
      }
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
