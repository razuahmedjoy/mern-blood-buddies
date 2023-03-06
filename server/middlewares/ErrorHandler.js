const ErrorHandler = (err, req, res, next) => {
    
    console.log("From Error Handler =========== ",err);
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        success: false,
        error: err?.message,
        stack: process.env.NODE_ENV === "production" ? null : err.stack,
    });
}

module.exports = ErrorHandler;
