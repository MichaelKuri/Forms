const userModel = require('../models/pollUser')

function create(newPolluser) {
    return userModel.create(newPolluser)
}
function read(filter) {
    return userModel.find(filter)
}
function update(updatePolluser) {
    return userModel.findByIdAndUpdate(updatePolluser._id, updatePolluser)
}
function del(id) {
    return userModel.findByIdAndDelete(id)
}

module.exports = { create, read, update, delete: del } 