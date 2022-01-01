const
    mongoose = require('mongoose'),
    schema = new mongoose.Schema({
        israeliId: {
            type: Number,
            require: true,
            unique: true
        },
        phone: {
            type: Number
        },
        name: {
            type: String
        },
        address: {
            type: String,
            require: true
        },
        mail: {
            type: String
        },
        education: {
            type: String,
            required: true
        },
        status: {
            type: String,
            enum: ['singel', 'married', 'divorcee', 'widower']
        },
        DateOfBirth: {
            type: Date
        },
        SectoralAffiliation: {
            type: String
        },
        gender: {
            type: String,
            enum: ['male', 'female']
        },
        permission: {
            type: String,
            enum: ['admin', 'editor', 'guest']
        },
        password: {
            type: String
        }
    })

module.exports = mongoose.model('user', schema)