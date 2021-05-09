module.exports = (request, response, next) => {
  console.log('the methods:', request.method, 'the path:', request.url, 'the prams:', request.params);
  next();
};