const complaintRepository = require('../repository/complaint_repository')
const {baseResponse} = require("../../../../utils/response");
const {Complaint} = require("../../../../entity/complaint");

const getComplaints = async (req, res) => {
    const complaintId = req.query.id

    if (complaintId === undefined) {
        const complaints = await complaintRepository.getAllComplaints()
        if (complaints.error) {
            res.status(500).json(baseResponse(500, complaints.error.message, null))
            return
        }
        res.status(200).json(baseResponse(200, null, complaints.data))
    } else {
        const complaint = await complaintRepository.getcomplaintsById(complaintId)
        if (complaint.error) {
            res.status(500).json(baseResponse(500, complaint.error.message, null))
            return
        }
        if (complaint.data.length === 0) {
            res.status(404).json(baseResponse(404, "complaint not found", null))
            return
        }
        res.status(200).json(baseResponse(200, null, complaint.data))
    }

}

const insertComplaint = async (req, res) => {
    const payload = req.body
    const newcomplaint = Complaint(payload)
    
    const {data,error} = await complaintRepository.insertNewcomplaint(newcomplaint)
    if (error) {
        res.status(500).json(baseResponse(500, error.message, null))
        return
    }
    res.status(201).json(baseResponse(201, "complaint created", data[0]))
}

const updateComplaint = async (req, res) => {
    const payload = req.body
    const complaintId = req.query.Id
    const newcomplaint = Complaint(payload)

    if (complaintId === undefined) {
        res.status(400).json(baseResponse(400, "complaint id should inserted to query id"))
        return
    }
    
    const getSingleComplait = await complaintRepository.getcomplaintsById(complaintId)
    if (getSingleComplait.error) {
        res.status(500).json(baseResponse(500, getSingleComplait.error.message, null))
        return
    }
    if (getSingleComplait.data.length ===  0){
        res.status(404).json(baseResponse(404, "complaint not found", null))
        return
    }

    const {data,error} = await complaintRepository.updateComplaint(complaintId, newcomplaint)
    if (error) {
        res.status(500).json(baseResponse(500, error.message, null))
        return
    }

    res.status(200).json(baseResponse(200, null, data[0]))

}

module.exports = {
    getComplaints,
    insertComplaint,
    updateComplaint
}