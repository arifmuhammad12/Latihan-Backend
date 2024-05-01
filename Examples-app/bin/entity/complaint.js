const Complaint = (payload) => ({
    id: payload.id,
    nama: payload.nama,
    kelas: payload.kelas,
    fakultas: payload.fakultas,
    jurusan: payload.jurusan,
    keluhan: payload.keluhan
})

module.exports = {
    Complaint 
}