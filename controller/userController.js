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
    if (id) {
        userModel.findByIdAndDelete(id)
        return 'done'
    } else {
        return 'cannot delete'
    }
}

module.exports = { create, read, update, delete: del } 