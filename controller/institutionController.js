const userModel = require('../models/institution')

function create(newInstitution) {
    return userModel.create(newInstitution)
}
function read(filter) {
    return userModel.find(filter)
}
function update(updateInstitution) {
    return userModel.findByIdAndUpdate(updateInstitution._id, updateInstitution)
}
function del(id) {
    return userModel.findByIdAndDelete(id)
}

module.exports = { create, read, update, delete: del } 