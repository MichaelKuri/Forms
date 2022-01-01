const
    mongoose = require('mongoose'),
    activitie = new mongoose.Schema({
        id: {
            type: String
        },
        name: {
            type: String
        },
        startdate: {
            type: Date
        },
        endDate: {
            type: Date
        },
        tags: []

    })
schema = new mongoose.Schema({
    name: {
        type: String
    },
    contact: {
        address: {
            type: String
        },
        phone: {
            type: Number
        },
        contactName: {
            type: String
        }
    },
    activities: [activitie]

})

module.exports = mongoose.model('institution', schema)