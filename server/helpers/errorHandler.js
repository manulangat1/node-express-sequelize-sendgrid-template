class Error{
    static handleError(error,statusCode,response){
        return response.status(statusCode).send({
            success: false,
            error
        })
    }
}
export default Error;