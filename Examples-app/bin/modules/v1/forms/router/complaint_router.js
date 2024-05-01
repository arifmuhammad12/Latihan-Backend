const complaintController = require('../controller/complaint_controller')
const router = require('express').Router()

router.get('/', complaintController.getComplaints)
router.post('/', complaintController.insertComplaint)
router.put('/', complaintController.updateComplaint)
//router.delete('/', complaintController.deleteComplaint)

module.exports = router