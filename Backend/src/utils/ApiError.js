class ApiError {
    constructor(
        statusCode,
        message="something went wrong",
        errors=[],
        stack=""
    ){
        super.message = message
        this.statusCode= statusCode
        this.data = null
        this.message = message
        this.errors = errors

        if(stack) {
            this.stack = stack
        } else{
            Error.captureStackTrace(this, this.contructor)
        }
    }
}

export {ApiError}