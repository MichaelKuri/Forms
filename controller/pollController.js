const pollModel = require('../models/poll')

function create(newPoll) {
    return pollModel.create(newPoll)
}
function read(filter) {
    return pollModel.find(filter)
}
function update(updatePoll) {
    return pollModel.findByIdAndUpdate(updatePoll._id, updatePoll)
}
function del(id) {
    return pollModel.findByIdAndDelete(id)
}

module.exports = { create, read, update, delete: del } 