module.exports = (request, response, next) => {
  if (request.query.name) {
    next();
  } else {
    next('error');

  }
};