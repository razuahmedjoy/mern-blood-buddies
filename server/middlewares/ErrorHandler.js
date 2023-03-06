const ErrorHandler = (err, req, res, next) => {
    
    console.log("From Error Handler =========== ",err);
    const statusCode = err.statusCode || 400;
    res.status(statusCode).json({
        success: false,
        message: err?.message,
        stack: process.env.NODE_ENV === "production" ? null : err.stack,
    });
}

module.exports = ErrorHandler;
