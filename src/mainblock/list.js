const express = require('express')

const router = express.Router()

router.get('/', (request, response) => {
  response.json(['A', 'B', 'C','D','E','F'])
})

module.exports = router