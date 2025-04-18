// Health check controller
exports.healthCheck = (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'API is running smoothly',
    timestamp: new Date()
  });
};
