module.exports = (req, res, error, next) => {
  res.status(404).json({
    error: 404,
    'this route dose not found': req.url,
  });
};