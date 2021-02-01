

export default (res,status,data,message) =>{
    res.status(status).json({
        "message":message,
        "data":data
    })
}