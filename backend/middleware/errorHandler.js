// middleware/errorHandler.js

const errorHandler = (err, req, res, next) => {
  console.error(err.stack); // Log the error stack trace

  // Set the status code based on the error
  const statusCode = err.statusCode || 500;

  // Set the response content type
  res.setHeader("Content-Type", "application/json");

  // Send the error response
  res.status(statusCode).json({
    error: {
      message: err.message || "Internal Server Error",
      statusCode: statusCode,
    },
  });
};

module.exports = errorHandler;
