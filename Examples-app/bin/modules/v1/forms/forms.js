const complaintRouter = require('./router/complaint_router')
const router = require('express').Router()

router.use('/complaints', complaintRouter)

module.exports = router