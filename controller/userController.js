const userModel = require('../models/user')

function create(newUser) {
    return userModel.create(newUser)
}
function read(filter) {
    return userModel.find(filter)
}
function update(updateUser) {
    return userModel.findByIdAndUpdate(updateUser._id, updateUser)
}
function del(id) {
    return userModel.findByIdAndDelete(id)
}

module.exports = { create, read, update, delete: del } 