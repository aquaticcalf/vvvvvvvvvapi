function notFound(request, response, next) {
  response.status(404)
  
  const error = new Error(`404 : Not Found - ${request.originalUrl}`)
  next(error)
}

function errorHandler(err, request, response, next) {
  const statusCode = response.statusCode !== 200 ? response.statusCode : 500

  response.status(statusCode)
  
  response.json({
    message: err.message,
    // uncomment the below line in dev env for fun and insights into the stack
    // stack: process.env.NODE_ENV === 'production' ? 'stack' : err.stack,
  })
}

module.exports = {
  notFound,
  errorHandler,
}