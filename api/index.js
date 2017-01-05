const { API_PROTOCOL, API_HOST, API_PORT, REDIS_HOST, REDIS_PORT, REDIS_AUTH } = require('./config')
const express = require('express')
const redis = require('redis')
const redisClient = redis.createClient(REDIS_PORT, REDIS_HOST, { no_ready_check: true, password: REDIS_AUTH })
const router = express.Router()
const superagent = require('superagent')

const apiHost = API_PROTOCOL+'://'+API_HOST+':'+API_PORT

redisClient.on('connect', function () {
  console.log('Connected to Redis', apiHost)
})

router.get('*', (req, res) => {
  console.log(decodeURIComponent(req.url))
  redisClient.get(decodeURIComponent(req.url), function (err, data) {
    try {
      if (!err && data) {
        res.json(JSON.parse(data))
      }else{
        superagent
        .get(apiHost + req.url)
        .end((err, response) => {
          res.send(JSON.parse(response.text))
        })
      }
    } catch(e)  {
      res.send('catch')
    }
  })
})

module.exports = router