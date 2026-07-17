const errorHandler = (err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || 'internal server error';
    res.status(status).json({ 
        success: false,
        error: message,
     });
};
export default errorHandler;