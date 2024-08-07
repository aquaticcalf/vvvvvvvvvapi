const express = require('express')

const list = require('./list')

const router = express.Router()

router.get('/', (request, response) => {
  response.json({
    message: 'main block',
  })
})

router.use('/list', list)

module.exports = router
