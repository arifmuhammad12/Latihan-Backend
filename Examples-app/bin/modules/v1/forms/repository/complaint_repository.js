const supabase = require('../../../../infra/database/supabase/supabase')
const { databaseResult } = require('../../../../utils/response');

const getAllcomplaints = async () => {
    const { data, error } = await supabase
        .from('complaints')
        .select()

    return databaseResult(data, error)

}

const getcomplaintsById = async (id) => {
    const {data, error} = await supabase
        .from('complaints')
        .select()
        .eq('id', id)

    return databaseResult(data, error)
}

const insertNewcomplaint = async (complaint) => {
    const {data, error} = await supabase
        .from('complaints')
        .insert(complaint)
        .select()

    return databaseResult(data, error)
}

const updateComplaint = async (id, updateComplaint) => {
    const { data, error } = await supabase  
        .from('complaints')
        .update(updateComplaint)
        .eq('id', id)
        .select()

    return databaseResult(data, error)
}

const deleteComplaint = async (id) => {
    const {data, error} = await supabase
        .from('complaints')
        .delete()
        .eq('id', id)
        .select()

    return databaseResult(data, error)
}

module.exports = {
    getAllcomplaints,
    getcomplaintsById,
    insertNewcomplaint,
    updateComplaint,
    deleteComplaint
}