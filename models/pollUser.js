const
    mongoose = require('mongoose'),
    question = new mongoose.Schema({
        idQuestion: {
            type: String
        },
        answer: []

    })
schema = new mongoose.Schema({
    idUser: {
        type: String
    },
    idPoll: {
        type: String
    },
    status: [],
    answers: [question]
})

module.exports = mongoose.model('pollUser', schema)