function baseResponse(code, message = '', data = '') {
    return{
    code: code,
    message: message,
    data: data
    }
}

const databaseResult = (result, error) => ({
    data: result,
    error: error 
})

module.exports = {
    databaseResult,
    baseResponse
}